import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import apiClient, { API_BASE_URL } from '../api/apiClient';
import { FiChevronRight, FiGrid, FiInfo, FiStar, FiTag, FiAlertCircle, FiShoppingCart, FiCheck, FiBox, FiCheckCircle, FiTool, FiClock, FiFilter, FiShield, FiGlobe, FiHeart, FiMail } from 'react-icons/fi';
import { TbAtom, TbTestPipe } from 'react-icons/tb';
import { FaFlask, FaBalanceScale, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { useCompare } from '../context/CompareContext';
import { useWishlist } from '../context/WishlistContext';
import { LuPanelRightDashed } from 'react-icons/lu';
import ProductShareButton from '../components/common/ProductShareButton';
import SEO from '../components/common/SEO';
import { getCategoryContent } from '../data/categoryContent';

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), '#'];

const HexagonIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center mx-auto mb-3 mt-1">
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-sm">
      <polygon
        points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
        fill="#F8FBFC"
        stroke="#DDF8FB"
        strokeWidth="2"
      />
    </svg>
    <svg className="w-6 h-6 text-[#0B7285] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 10l-3-2v-4" />
      <path d="M18 10l3-2v-4" />
      <path d="M12 22l-5-3v-6l5-3 5 3v6z" />
      <circle cx="3" cy="3" r="1" fill="currentColor" />
      <circle cx="21" cy="3" r="1" fill="currentColor" />
    </svg>
  </div>
);

export default function ProductsView() {
  const { t } = useTranslation();
  const { subCategory } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const { addToCart, cartItems } = useCart();
  const { addToCompare, compareItems, removeFromCompare } = useCompare();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const currentLetter = searchParams.get('letter') || 'All';
  const searchQueryParam = searchParams.get('q') || '';

  const [pageMeta, setPageMeta] = useState(null);
  const [isDescExpanded, setIsDescExpanded] = useState(false);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setProducts([]);
        setPageMeta(null);
        setCategoryFilter('All');
        const getCategoryType = (p) => {
          const catSlug = p.category?.slug?.toLowerCase() || '';
          const catId = String(p.category_id || p.category?.categoryId || '');
          const catName = p.category?.categoryName?.toLowerCase() || '';
          const prodType = p.productType?.toLowerCase() || '';

          if (
            catSlug.includes('nitroso') ||
            catId === '2' ||
            catName.includes('nitroso') ||
            prodType.includes('nitroso')
          ) {
            return 'nitroso';
          }

          if (
            catSlug.includes('isotope') ||
            catId === '4' ||
            catName.includes('isotope') ||
            prodType.includes('isotope')
          ) {
            return 'isotope';
          }

          return 'reference';
        };

        let url;
        if (subCategory === 'search') {
          const escapeRegex = (str) => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
          const escapedQuery = escapeRegex(searchQueryParam || '');
          url = `${API_BASE_URL}/products?search=${encodeURIComponent(escapedQuery)}`;
          const res = await axios.get(url);
          if (res.data.success) {
            setProducts(res.data.data.map(p => ({
              ...p,
              _categoryType: getCategoryType(p)
            })));
            if (res.data.pagination) setPageMeta(res.data.pagination);
          } else {
            setProducts([]);
          }
        } else {
          // Fetch main subproducts
          url = `${API_BASE_URL}/products/${subCategory}/subproducts`;
          const res = await axios.get(url);
          let allProducts = [];
          if (res.data.success) {
            // Tag each product with its type
            allProducts = res.data.data.map(p => ({
              ...p,
              _categoryType: getCategoryType(p)
            }));
            if (res.data.pagination) setPageMeta(res.data.pagination);
          }

          // Only fetch related nitroso & isotope products if this is API IMPURITIES & REFERENCE STANDARDS
          const fetchedCat = res.data?.pagination?.category || (allProducts.length > 0 ? allProducts[0].category : null);
          const fetchedCatSlug = fetchedCat?.slug?.toLowerCase() || '';
          const fetchedCatName = fetchedCat?.categoryName?.toUpperCase() || '';
          const fetchedCatId = String(fetchedCat?.categoryId || (allProducts.length > 0 ? allProducts[0].category_id : '') || '');
          const isCategoryApiImpurities = fetchedCatSlug === 'api-impurities-and-reference-standards' ||
            fetchedCatId === '1' ||
            fetchedCatName.includes('API IMPURITIES');

          if (isCategoryApiImpurities) {
            // Also fetch related nitroso & isotope products by searching the API name
            const apiName = subCategory.replace(/-/g, ' ');
            try {
              const searchRes = await axios.get(`${API_BASE_URL}/products?search=${encodeURIComponent(apiName)}`).catch(() => ({ data: { data: [] } }));

              const existingIds = new Set(allProducts.map(p => p._id));

              if (searchRes.data?.data) {
                searchRes.data.data.forEach(p => {
                  if (!existingIds.has(p._id)) {
                    const type = getCategoryType(p);
                    if (type === 'nitroso' || type === 'isotope') {
                      existingIds.add(p._id);
                      allProducts.push({ ...p, _categoryType: type });
                    }
                  }
                });
              }
            } catch (e) {
              console.error('Error fetching related products:', e);
            }
          }

          setProducts(allProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback: try fetching by category directly in case of custom routing
        try {
          const fallbackRes = await axios.get(`${API_BASE_URL}/products?category=${encodeURIComponent(subCategory)}`);
          if (fallbackRes.data?.success && fallbackRes.data?.data?.length > 0) {
            setProducts(fallbackRes.data.data.map(p => ({
              ...p,
              _categoryType: getCategoryType(p)
            })));
            if (fallbackRes.data.pagination) setPageMeta(fallbackRes.data.pagination);
            return;
          }
        } catch (fbErr) {
          console.error('Fallback fetch also failed:', fbErr);
        }
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [subCategory, searchQueryParam]);

  const handleLetterClick = (letter) => {
    if (subCategory !== 'search' && isApiImpurities) {
      if (letter === 'All') {
        navigate(`/product-categories-view/api-impurities-and-reference-standards`);
      } else {
        navigate(`/product-categories-view/api-impurities-and-reference-standards?letter=${letter}`);
      }
    } else {
      if (letter === 'All') {
        searchParams.delete('letter');
      } else {
        searchParams.set('letter', letter);
      }
      setSearchParams(searchParams);
    }
  };

  const productsMatchingOtherFilters = products.filter(product => {
    // Alphabet filter
    let letterMatch = true;
    if (currentLetter !== 'All') {
      if (currentLetter === '#') letterMatch = !/^[a-zA-Z]/.test(product.name);
      else letterMatch = product.name?.toUpperCase().startsWith(currentLetter);
    }

    // Availability filter
    let availabilityMatch = true;
    if (availabilityFilter !== 'All') {
      const prodAvail = (product.availability || 'In Stock').toLowerCase();
      if (availabilityFilter === 'In Stock') {
        availabilityMatch = prodAvail === 'in stock';
      } else if (availabilityFilter === 'Custom Synthesis') {
        availabilityMatch = prodAvail === 'custom synthesis' || (prodAvail !== 'in stock' && prodAvail !== 'under synthesis');
      } else if (availabilityFilter === 'Under Synthesis') {
        availabilityMatch = prodAvail === 'under synthesis';
      }
    }

    return letterMatch && availabilityMatch;
  });

  // Determine if current category is API IMPURITIES & REFERENCE STANDARDS
  const currentCategory = pageMeta?.category || (products.length > 0 ? products[0].category : null);
  const currentCatSlug = currentCategory?.slug?.toLowerCase() || '';
  const currentCatName = currentCategory?.categoryName?.toUpperCase() || '';
  const currentCatId = String(currentCategory?.categoryId || (products.length > 0 ? products[0].category_id : '') || '');

  const isApiImpurities = subCategory !== 'search' && (
    currentCatSlug === 'api-impurities-and-reference-standards' ||
    currentCatId === '1' ||
    currentCatName.includes('API IMPURITIES')
  );

  const baseForCounts = isApiImpurities ? products : productsMatchingOtherFilters;

  const categoryCounts = {
    All: baseForCounts.length,
    reference: baseForCounts.filter(p => p._categoryType === 'reference' || !p._categoryType).length,
    nitroso: baseForCounts.filter(p => p._categoryType === 'nitroso').length,
    isotope: baseForCounts.filter(p => p._categoryType === 'isotope').length,
  };

  const filteredProducts = productsMatchingOtherFilters.filter(product => {
    // Category filter is only applicable for API IMPURITIES & REFERENCE STANDARDS
    if (isApiImpurities && categoryFilter !== 'All') {
      const type = product._categoryType || 'reference';
      return type === categoryFilter;
    }
    return true;
  });

  let rawCategoryName = pageMeta?.category?.categoryName || (products.length > 0 ? products[0].category?.categoryName : null) || subCategory.replace(/-/g, ' ');
  const categoryName = rawCategoryName.replace('API IMPURITIES & REFERENCE STANDARDS', 'API Impurities & Reference Standards')
    .replace('API IMPURITIES AND REFERENCE STANDARDS', 'API Impurities and Reference Standards')
    .replace('API IMPURITIES', 'API Impurities');

  const displaySubCategory = subCategory === 'search' ? 'Search Results' : (pageMeta?.mainProduct?.heading || subCategory || 'D-Group - API-2');
  const displaySubCategoryStr = displaySubCategory.replace(/-/g, ' ');
  const displayCategoryName = subCategory === 'search' ? `"${searchQueryParam}"` : (categoryName || 'API Impurities and Reference Standards');
  const isRedundant = displaySubCategoryStr.toLowerCase() === displayCategoryName.toLowerCase();

  const categoryData = subCategory !== 'search'
    ? (getCategoryContent(subCategory) || (isRedundant ? getCategoryContent(displayCategoryName) : null))
    : null;

  const pageTitle = subCategory === 'search'
    ? `Search Results for "${searchQueryParam}"`
    : (categoryData ? `${categoryData.title} | GLP Pharma Standards` : `${displaySubCategoryStr} Impurities & Standards | ${displayCategoryName}`);

  const pageDescription = subCategory === 'search'
    ? `Search results for pharmaceutical impurity standards matching "${searchQueryParam}" from GLP Pharma Standards.`
    : (categoryData ? `${categoryData.subtitle}. ${categoryData.paragraphs[0]}` : `Buy high-purity ${displaySubCategoryStr} impurity standards, metabolites, and analytical reference standards under ${displayCategoryName} from GLP Pharma Standards.`);

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans pb-16 ">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={subCategory === 'search' ? undefined : `/products-view/${subCategory}`}
      />

      {/* Alphabet Navigation */}
      <div className="max-w-[1600px] w-full mx-auto px-2 sm:px-4 lg:px-6 pt-2 sm:pt-6 pb-2 sm:pb-4 relative z-20">
        <div className="bg-white/90 backdrop-blur-xl rounded-[18px] sm:rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-2 sm:p-3.5 border border-white/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex-1 flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto scrollbar-hide min-w-0 px-0.5 sm:px-2 py-0.5" style={{ WebkitOverflowScrolling: 'touch' }}>
                <button
                  onClick={() => handleLetterClick('All')}
                  className={`flex-shrink-0 flex items-center justify-center gap-1 px-3.5 sm:px-4 h-[36px] sm:h-[42px] rounded-xl sm:rounded-full text-[13px] sm:text-[14.5px] font-extrabold transition-all duration-300 backdrop-blur-md cursor-pointer ${currentLetter === 'All'
                    ? 'bg-gradient-to-r from-[#1AA3B6] to-[#0B7285] text-white shadow-[0_4px_15px_rgba(26,163,182,0.3)] border-0 scale-102 sm:scale-105'
                    : 'bg-white hover:bg-[#F8FBFC] text-[#12344D] border border-gray-200 shadow-xs hover:shadow-sm hover:text-[#1AA3B6]'
                    }`}
                >
                  <FiGrid size={15} /> All
                </button>

                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  {alphabet.map(letter => {
                    const isActive = currentLetter === letter;
                    return (
                      <button
                        key={letter}
                        onClick={() => handleLetterClick(letter)}
                        className={`flex-shrink-0 w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] flex items-center justify-center rounded-xl sm:rounded-[14px] text-[15px] sm:text-[17px] font-extrabold transition-all duration-300 backdrop-blur-md cursor-pointer ${isActive
                          ? 'bg-gradient-to-br from-[#1AA3B6] to-[#0B7285] text-white shadow-[0_4px_15px_rgba(26,163,182,0.3)] border-0 scale-105 sm:scale-110'
                          : 'bg-white hover:bg-[#F8FBFC] text-[#12344D] border border-gray-200 shadow-xs hover:shadow-sm hover:text-[#1AA3B6] hover:-translate-y-0.5'
                          }`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero & Filters Grid */}
      <div className="w-full xl:w-[98%] 2xl:w-[100%] max-w-[1700px] mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-8 sm:pb-16 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center mb-4 sm:mb-8">

        {/* Left Side: Premium Hero Content */}
        <div className="w-full lg:w-[46%] xl:w-[48%] flex flex-col items-start px-1 sm:px-2 lg:px-4 xl:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[15px] text-slate-700 font-medium mb-3 sm:mb-6 flex-wrap">
            <Link to="/" className="text-slate-600 hover:text-[#1AA3B6] transition-colors">Home</Link>
            {!isRedundant && (
              <>
                <FiChevronRight className="text-slate-400 text-[13px] sm:text-[14px] mt-0.5" />
                <Link
                  to={isApiImpurities
                    ? `/product-categories-view/api-impurities-and-reference-standards`
                    : `/products-view/${pageMeta?.category?.slug || subCategory}`
                  }
                  className="text-slate-600 hover:text-[#1AA3B6] transition-colors"
                >
                  {displayCategoryName}
                </Link>
              </>
            )}
            <FiChevronRight className="text-slate-400 text-[13px] sm:text-[14px] mt-0.5" />
            <span className="text-[#1AA3B6] font-semibold">{displaySubCategoryStr}</span>
          </div>

          {/* Main Heading */}
          <div className="mb-3 sm:mb-4">
            <h1 className="block text-[#084553] text-xl sm:text-2xl md:text-3xl leading-[1.2] tracking-[-0.015em] font-extrabold">
              {categoryData?.title || displaySubCategoryStr}
            </h1>

            {!isRedundant && !categoryData && (
              <span className="block mt-1 sm:mt-1.5 text-[#12344D] text-sm sm:text-base font-bold">
                {displayCategoryName}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="text-slate-700 text-xs sm:text-[13.5px] max-w-[580px] mb-5 sm:mb-6 leading-relaxed font-normal">
            {categoryData ? (
              <div>
                {!isDescExpanded ? (
                  <>
                    <p className="leading-relaxed text-slate-700">
                      {categoryData.paragraphs[0]}
                    </p>
                    {(categoryData.paragraphs.length > 1 || categoryData.specialSection) && (
                      <button
                        onClick={() => setIsDescExpanded(true)}
                        className="inline-flex items-center gap-1 text-[#0B7285] hover:text-[#084553] font-bold text-xs mt-2 transition-colors cursor-pointer"
                      >
                        <span>See More</span>
                        <FiChevronRight className="transition-transform duration-200 rotate-90" />
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <div className="max-h-[220px] sm:max-h-[260px] overflow-y-auto pr-2 space-y-2.5 [scrollbar-width:thin] [scrollbar-color:#1AA3B6_#F1F5F9]">
                      {categoryData.paragraphs.map((para, idx) => (
                        <p key={idx} className="leading-relaxed text-slate-700">
                          {para}
                        </p>
                      ))}

                      {categoryData.specialSection && (
                        <div className="space-y-2 pt-1 text-slate-700">
                          <h4 className="font-bold text-[#084553] text-[13px] sm:text-sm">
                            {categoryData.specialSection.heading}
                          </h4>
                          {categoryData.specialSection.paragraphs && categoryData.specialSection.paragraphs.map((sp, sIdx) => (
                            <p key={sIdx} className="leading-relaxed text-slate-700">{sp}</p>
                          ))}
                          {categoryData.specialSection.subheading && (
                            <h5 className="font-bold text-[#084553] text-xs sm:text-[13px] pt-1">
                              {categoryData.specialSection.subheading}
                            </h5>
                          )}
                          {categoryData.specialSection.points && (
                            <ul className="space-y-1 text-slate-700 list-disc list-inside">
                              {categoryData.specialSection.points.map((pt, ptIdx) => (
                                <li key={ptIdx}>{pt}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setIsDescExpanded(false)}
                      className="inline-flex items-center gap-1 text-[#0B7285] hover:text-[#084553] font-bold text-xs mt-2 transition-colors cursor-pointer"
                    >
                      <span>See Less</span>
                      <FiChevronRight className="transition-transform duration-200 -rotate-90" />
                    </button>
                  </>
                )}
              </div>
            ) : (
              (() => {
                const fallbackParas = (pageMeta?.mainProduct?.content ||
                  pageMeta?.category?.description ||
                  "Explore our comprehensive range of high-quality pharmaceutical impurities and reference standards designed for precise analytical research."
                ).split(/\n+/).filter(Boolean);

                if (fallbackParas.length <= 1) {
                  return <p className="leading-relaxed text-slate-700">{fallbackParas[0]}</p>;
                }

                return !isDescExpanded ? (
                  <>
                    <p className="leading-relaxed text-slate-700">{fallbackParas[0]}</p>
                    <button
                      onClick={() => setIsDescExpanded(true)}
                      className="inline-flex items-center gap-1 text-[#0B7285] hover:text-[#084553] font-bold text-xs mt-2 transition-colors cursor-pointer"
                    >
                      <span>See More</span>
                      <FiChevronRight className="transition-transform duration-200 rotate-90" />
                    </button>
                  </>
                ) : (
                  <>
                    <div className="max-h-[220px] sm:max-h-[260px] overflow-y-auto pr-2 space-y-2.5 [scrollbar-width:thin] [scrollbar-color:#1AA3B6_#F1F5F9]">
                      {fallbackParas.map((para, idx) => (
                        <p key={idx} className="leading-relaxed text-slate-700">{para}</p>
                      ))}
                    </div>
                    <button
                      onClick={() => setIsDescExpanded(false)}
                      className="inline-flex items-center gap-1 text-[#0B7285] hover:text-[#084553] font-bold text-xs mt-2 transition-colors cursor-pointer"
                    >
                      <span>See Less</span>
                      <FiChevronRight className="transition-transform duration-200 -rotate-90" />
                    </button>
                  </>
                );
              })()
            )}
          </div>

          {/* Features Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 w-full pb-1 lg:pb-0">

            {/* Feature 1 */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#084553] flex items-center justify-center text-white shrink-0 border border-[#D9E8EC]">
                <FiShield size={16} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-[13px] sm:text-[14px] font-bold text-[#12344D]">Reliable Quality</h4>
                <p className="text-[11.5px] sm:text-[12px] text-slate-700 font-medium mt-0.5">Stringent quality control processes</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-[#EAF2F4]"></div>

            {/* Feature 2 */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-full bg-[#084553] flex items-center justify-center text-white shrink-0 border border-[#D9E8EC]">
                <FaFlask size={16} />
              </div>
              <div>
                <h4 className="text-[13px] sm:text-[14px] font-bold text-[#12344D]">Analytical Excellence</h4>
                <p className="text-[11.5px] sm:text-[12px] text-slate-700 font-medium mt-0.5">Ensuring accurate results</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Filters */}
        <div className="w-full lg:w-[54%] xl:w-[52%]">
          <div className="bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-3.5 sm:p-5 md:p-6">

            {/* Top Row: Count & Stock Status Filter */}
            <div className={`flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap sm:items-center justify-between gap-3 sm:gap-4 ${isApiImpurities ? 'mb-4 sm:mb-6' : 'mb-0'}`}>

              {/* Product Count Pill */}
              <div className="shrink-0 bg-[#F8FBFC] text-[#084553] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl flex items-center gap-2 font-bold border border-[#EAF2F4] shadow-xs w-full sm:w-auto justify-center text-[12.5px] sm:text-[13px]">
                <FaFlask className="text-[14px] sm:text-[15px] text-[#1AA3B6]" />
                <span>{filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found</span>
              </div>

              {/* Stock Status Filter Buttons: Mobile 2x2 Grid, Tablet/Desktop Flex Row */}
              <div className="grid grid-cols-2 gap-1.5 w-full sm:flex sm:flex-row sm:w-auto bg-[#F8FBFC] sm:bg-white rounded-xl p-1.5 sm:p-1 border border-gray-200 shadow-xs shrink-0">
                {[
                  { type: 'All', icon: <FiBox size={14} /> },
                  { type: 'In Stock', icon: <FiCheckCircle size={14} /> },
                  { type: 'Custom Synthesis', icon: <FiTool size={14} /> },
                  { type: 'Under Synthesis', icon: <FiClock size={14} /> },
                ].map(({ type, icon }) => {
                  const isActive = availabilityFilter === type;
                  return (
                    <button
                      key={type}
                      onClick={() => setAvailabilityFilter(type)}
                      className={`shrink-0 flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-1.5 text-[11.5px] sm:text-[12px] font-bold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${isActive
                        ? 'bg-[#1AA3B6] text-white shadow-sm'
                        : 'text-[#12344D] hover:bg-white sm:hover:bg-[#084553]/10'
                        }`}
                    >
                      <span className="shrink-0">{icon}</span>
                      <span className="whitespace-nowrap">{type}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Filters List (Only for API Impurities & Reference Standards) */}
            {isApiImpurities && (
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {[
                  { key: 'All', label: 'Pharmaceutical Reference Standards', icon: <FaFlask size={17} />, count: categoryCounts.All },
                  { key: 'nitroso', label: 'Possible Nitroso Standards', icon: <TbTestPipe size={17} />, count: categoryCounts.nitroso },
                  { key: 'isotope', label: 'Stable Isotopes', icon: <TbAtom size={17} />, count: categoryCounts.isotope },
                ].map((filter) => {
                  const isActive = categoryFilter === filter.key;
                  return (
                    <button
                      key={filter.key}
                      onClick={() => setCategoryFilter(filter.key)}
                      className={`w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-[14px] sm:rounded-[16px] transition-all duration-300 border-2 cursor-pointer ${isActive
                        ? 'bg-white border-[#084553] shadow-sm'
                        : 'bg-white border-gray-100 hover:border-gray-200'
                        }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 pr-2">
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 ${isActive ? 'bg-[#084553]/10 text-[#084553]' : 'bg-slate-50 text-[#084553]'}`}>
                          {filter.icon}
                        </div>
                        <span className={`text-[12px] sm:text-[14px] font-extrabold text-left truncate sm:whitespace-normal ${isActive ? 'text-[#084553]' : 'text-slate-600'}`}>
                          {filter.label}
                        </span>
                      </div>
                      <span className={`shrink-0 text-[11px] sm:text-[12.5px] font-black px-2.5 sm:px-3.5 py-1 rounded-full ${isActive ? 'bg-[#084553] text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

          </div>
        </div>
      </div>

      <div className="w-full xl:w-[98%] 2xl:w-[96%] max-w-[1700px] mx-auto px-3 sm:px-4 lg:px-6">
        {loading ? (
          <div className="py-16 flex flex-col items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#EAF2F4] border-t-[#0B7285] rounded-full animate-spin"></div>
            <span className="mt-3 text-body font-medium text-sm">{t('products.loadingProd')}</span>
          </div>
        ) : filteredProducts.length === 0 ? (
          products.length === 0 ? (
            <div className="py-14 sm:py-18 px-6 sm:px-10 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-[#EAF2F4] shadow-sm max-w-2xl mx-auto my-4">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F7F9] text-[#1AA3B6] flex items-center justify-center mb-4 shadow-xs border border-[#D0F0F5]">
                <FiBox className="text-3xl" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1AA3B6]/10 text-[#0B7285] text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#1AA3B6] animate-pulse"></span>
                Working on this products category
              </span>
              <h3 className="font-extrabold text-[#084553] text-2xl sm:text-3xl mb-2 tracking-tight">
                We Are Uploading Our Products
              </h3>
              <p className="text-slate-700 text-sm sm:text-[15px] max-w-lg mb-6 leading-relaxed">
                Our scientific team is actively cataloguing and uploading high-purity reference standards, impurities, and CoA analytical documentation for this category. In the meantime, custom synthesis, batch documentation, and immediate supply are available upon request.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/quick-enquiry"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1AA3B6] hover:bg-[#0B7285] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
                >
                  <FiMail size={16} />
                  Enquire About This Category
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F8FBFC] hover:bg-[#EAF2F4] border border-[#D9E8EC] text-[#084553] font-semibold text-xs sm:text-sm transition-all"
                >
                  Contact Technical Team
                </Link>
              </div>
            </div>
          ) : (
            <div className="py-16 sm:py-20 px-6 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-[#EAF2F4] shadow-sm max-w-xl mx-auto my-8">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-4 border border-slate-100">
                <FiAlertCircle className="text-3xl" />
              </div>
              <h3 className="font-bold text-[#084553] mb-1.5 text-xl">No Products Matched</h3>
              <p className="text-slate-600 text-sm max-w-md mb-5 leading-relaxed">
                We couldn't find any products matching your current search or active filter criteria.
              </p>
              <button
                onClick={() => {
                  searchParams.delete('letter');
                  setSearchParams(searchParams);
                  setAvailabilityFilter('All');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#084553] hover:bg-[#0B7285] text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="w-full flex flex-col bg-white rounded-[20px] border border-[#EAF2F4] shadow-sm p-4 hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  {(() => {
                    const avail = (product.availability || 'In Stock').toLowerCase();
                    const isStock = avail === 'in stock';
                    const isUnder = avail === 'under synthesis';
                    const badgeClass = isStock
                      ? 'bg-[#1AA3B6] text-white'
                      : isUnder
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-orange-50 text-orange-600 border border-orange-100';
                    const dotClass = isStock
                      ? 'bg-white animate-pulse'
                      : isUnder
                        ? 'bg-amber-500 animate-pulse'
                        : 'bg-orange-500';

                    return (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border-0 tracking-wide shadow-sm flex items-center gap-1.5 ${badgeClass}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`}></span>
                          {product.availability || 'In Stock'}
                        </span>
                        {product._categoryType === 'isotope' && (
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 tracking-wide shadow-2xs flex items-center gap-1">
                            <TbAtom size={11} className="text-cyan-600" />
                            Isotope
                          </span>
                        )}
                      </div>
                    );
                  })()}
                  <div className="flex items-center gap-2">
                    <div className="relative group/wishlist">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWishlist(product);
                        }}
                        className={`p-1.5 rounded-md transition-all duration-300 active:scale-90 hover:scale-110 hover:shadow-md ${isInWishlist(product._id)
                          ? 'bg-rose-50 text-rose-500 border border-rose-200 shadow-sm'
                          : 'bg-[#E8F4F6] text-[#0B7285] hover:bg-rose-50 hover:text-rose-500'
                          }`}
                        title={isInWishlist(product._id) ? "Remove from Wishlist" : "Add to Wishlist"}
                      >
                        <FiHeart size={16} className={isInWishlist(product._id) ? "fill-rose-500" : ""} />
                      </button>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#12344D] text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover/wishlist:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-sm">
                        {isInWishlist(product._id) ? 'In Wishlist' : 'Add to Wishlist'}
                        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#12344D] rotate-45"></div>
                      </span>
                    </div>
                    <ProductShareButton product={product} />
                    <div className="relative group/whatsapp">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const url = `${window.location.origin}/products/${product.slug}`;
                          const text = `GLP Pharma Product Details:\n\nProduct: ${product.name?.split(';')[0] || 'N/A'}\nCAT No.: ${product.specifications?.catalogueNumber || product.catalogueNumber || 'N/A'}\nCAS No.: ${product.specifications?.casNumber || product.casNumber || 'N/A'}\nMolecular Formula: ${product.specifications?.molecularFormula || product.molecularFormula || 'N/A'}\nMolecular Weight: ${product.specifications?.molecularWeight || product.molecularWeight || 'N/A'}\nCategory: ${(product.category?.categoryName || product.category || 'N/A').replace('API IMPURITIES & REFERENCE STANDARDS', 'API Impurities & Reference Standards')}\nAPI Family: ${product.mainProduct?.heading || product.mainProduct?.name || 'N/A'}\nAvailability: ${product.availability || 'In Stock'}\n\nView Product: ${url}`;
                          window.open(`https://wa.me/919866074638?text=${encodeURIComponent(text)}`, '_blank');
                        }}
                        className="p-1.5 rounded-md transition-all duration-300 active:scale-90 hover:scale-110 hover:shadow-md bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white"
                      >
                        <FaWhatsapp size={16} />
                      </button>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#12344D] text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover/whatsapp:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-sm">
                        WhatsApp Enquiry
                        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#12344D] rotate-45"></div>
                      </span>
                    </div>
                    <div className="relative group/compare">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (compareItems.some(item => item._id === product._id)) {
                            removeFromCompare(product._id);
                          } else {
                            addToCompare(product);
                          }
                        }}
                        className={`p-1.5 rounded-md transition-all duration-300 active:scale-90 hover:scale-110 hover:shadow-md ${compareItems.some(item => item._id === product._id) ? 'bg-[#1AA3B6] text-white' : 'bg-[#E8F4F6] text-[#0B7285] hover:bg-[#1AA3B6] hover:text-white'}`}
                      >
                        <LuPanelRightDashed size={16} />
                      </button>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#12344D] text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover/compare:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-sm">
                        Add To Compare
                        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#12344D] rotate-45"></div>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative w-full aspect-square max-h-[250px] mx-auto flex items-center justify-center group/img">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm group-hover/img:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50/80 rounded-xl border border-dashed border-slate-200 text-slate-300 p-4">
                      <FaFlask size={36} className="text-slate-300 mb-1" />
                      <span className="text-[11px] font-semibold text-slate-400">Structure Not Available</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="text-center mb-1 select-text cursor-text">
                  <h3 className="font-bold text-[#1AA3B6] text-[15px] leading-snug min-h-[40px] flex items-center justify-center line-clamp-2 hover:text-heading select-text cursor-text">
                    {product.name?.split(';')[0]}
                  </h3>
                </div>

                {/* Details Table */}
                <div className="border border-[#EAF2F4] rounded-[12px] overflow-hidden mb-2 select-text cursor-text">
                  {/* row 0 */}
                  <div className="flex items-center p-1.5 border-b border-[#EAF2F4] text-[12px] bg-white group/row hover:bg-[#F8FAFC] transition-colors relative select-text cursor-text">
                    <div className="flex items-center gap-2 text-slate-700 font-bold tracking-wide w-1/2 select-text cursor-text">
                      <FiTag className="text-[#0B7285] text-[13px] shrink-0" />
                      <span>CAT No.</span>
                    </div>
                    <div className="block w-[1.5px] h-5 bg-slate-300 group-hover/row:bg-[#1AA3B6]/50 transition-colors mx-2 shrink-0"></div>
                    <span className="font-semibold text-heading text-left w-1/2 truncate pl-1 select-text cursor-text selection:bg-[#1AA3B6]/20">{product.specifications?.catalogueNumber || product.catalogueNumber || 'N/A'}</span>
                  </div>
                  {/* row 1 */}
                  <div className="flex items-center p-1.5 border-b border-[#EAF2F4] text-[12px] bg-white group/row hover:bg-[#F8FAFC] transition-colors relative select-text cursor-text">
                    <div className="flex items-center gap-2 text-slate-700 font-bold tracking-wide w-1/2 select-text cursor-text">
                      <FaFlask className="text-[#0B7285] text-[13px] shrink-0" />
                      <span>CAS Number</span>
                    </div>
                    <div className="block w-[1.5px] h-5 bg-slate-300 group-hover/row:bg-[#1AA3B6]/50 transition-colors mx-2 shrink-0"></div>
                    <span className="font-semibold text-heading text-left w-1/2 truncate pl-1 select-text cursor-text selection:bg-[#1AA3B6]/20">{product.specifications?.casNumber || product.casNumber || 'N/A'}</span>
                  </div>
                  {/* row 2 */}
                  <div className="flex items-center p-1.5 border-b border-[#EAF2F4] text-[12px] bg-white group/row hover:bg-[#F8FAFC] transition-colors relative select-text cursor-text">
                    <div className="flex items-center gap-2 text-slate-700 font-bold tracking-wide w-1/2 select-text cursor-text">
                      <FiTag className="text-[#0B7285] text-[13px] shrink-0" />
                      <span>Mol. Formula</span>
                    </div>
                    <div className="block w-[1.5px] h-5 bg-slate-300 group-hover/row:bg-[#1AA3B6]/50 transition-colors mx-2 shrink-0"></div>
                    <span className="font-semibold text-heading text-left uppercase w-1/2 truncate pl-1 select-text cursor-text selection:bg-[#1AA3B6]/20">{product.specifications?.molecularFormula || product.molecularFormula || 'N/A'}</span>
                  </div>
                  {/* row 3 */}
                  <div className="flex items-center p-1.5 text-[12px] bg-white group/row hover:bg-[#F8FAFC] transition-colors relative select-text cursor-text">
                    <div className="flex items-center gap-2 text-slate-700 font-bold tracking-wide w-1/2 select-text cursor-text">
                      <FaBalanceScale className="text-[#0B7285] text-[13px] shrink-0" />
                      <span>Mol. Weight</span>
                    </div>
                    <div className="block w-[1.5px] h-5 bg-slate-300 group-hover/row:bg-[#1AA3B6]/50 transition-colors mx-2 shrink-0"></div>
                    <span className="font-semibold text-heading text-left w-1/2 truncate pl-1 select-text cursor-text selection:bg-[#1AA3B6]/20">{product.specifications?.molecularWeight || product.molecularWeight || 'N/A'}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2.5 mt-auto">
                  <Link
                    to={`/products/${product.slug}`}
                    className="flex-1 flex items-center justify-center gap-1.5 border border-[#0B7285] text-[#0B7285] font-bold py-2 rounded-[10px] hover:bg-[#F8FBFC] transition-colors text-[14px]"
                  >
                    <FiInfo className="text-sm" />
                    More Info
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#0B7285] text-white font-bold py-2 rounded-[10px] hover:bg-[#0B7285] transition-colors text-[14px]"
                  >
                    {cartItems.some(item => item.id === product._id) ? (
                      <>
                        <FiCheck className="text-sm" />
                        Added to RFQ
                      </>
                    ) : (
                      <>
                        <FiShoppingCart className="text-sm" />
                        Add to RFQ
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
