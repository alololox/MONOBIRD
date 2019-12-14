using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Pdp.Models
{
    public class ProductDetailModel
    {
        public int ProductNo { get; set; }
        public string LargeImageUrl { get; set; }
        //public SexCd SexCd { get; set; }
        public bool isUnisex { get; set; }
        public string Descr { get; set; }
        public string New { get; set; }
        public string Revised { get; set; }
        public string WebExclusive { get; set; }
        public string Pro { get; set; }
        public string MktgName { get; set; }
        public string SubMktgName { get; set; }
        public string Design { get; set; }
        public string ShortDesign { get; set; }
        public string TranslatedDescr { get; set; }
        public string TranslatedMktgName { get; set; }
        public string TranslatedSubMktgName { get; set; }
        public string TranslatedDesign { get; set; }
        public string TranslatedShortDesign { get; set; }
        public string TranslatedCare { get; set; }
        public string GenericEquiv { get; set; }
        public string WarehouseDep { get; set; }
        public string MaleModelNo { get; set; }
        public string FemaleModelNo { get; set; }
        public double? Weight { get; set; }
        public string GenderEquiv { get; set; }
        // colors
        public string ColorCodes { get; set; }
        public List<string> ColorNames { get; set; }
        //public List<AlternateImage> AlternateImages { get; set; }
        // price & skus
        public string Skus { get; set; }
        //public List<ProductSkuModel> SkuModel { get; set; }
        public string AvaTaxCodeB2C { get; set; }
        public string SKURestricted { get; set; }
        public decimal CostPrice { get; set; }
        public decimal? Price { get; set; }
        public string DefaultCulture { get; set; }
        public int PriceListVersion { get; set; }
        public string VATIncl { get; set; }
        public string CrncyCd { get; set; }
        // color exclusion list
        public List<string> ExcludedColorCodes { get; set; }
        public List<string> ExcludedColorNames { get; set; }
        // sizes
        public string Sizes { get; set; }
        public string SizeSchemeCd { get; set; }
        public string SizeTypeCd { get; set; }
        // merchandising
        //public ProductMerchandisingModel MerchandisingModel { get; set; }
        public List<string> ComplementaryProducts { get; set; }
        public string DefaultColorCd { get; set; }
        public string DefaultColorDescription { get; set; }
        public string UserSelectedColor { get; set; }
        public string ForceInStock { get; set; }
        // others
        public string ProductType { get; set; }
        public bool DoNotDisplay { get; set; }
    }
}
