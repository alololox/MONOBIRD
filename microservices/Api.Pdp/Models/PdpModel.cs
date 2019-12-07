namespace Api.Pdp.Models
{
    public class PdpModel
    {
        public PdpModel()
        {
            Details = new ProductDetailModel();
        }

        //   public recordsRecord Original {get;set;}
        
        // primitives
        public string Name { get; set; }

        //to fully represent a product, eventually we will have something that looks more like this (copied from arc.com)
        public ProductDetailModel Details { get; set; }
        //public List<ProductSkuModel> SkuDetails { get; set; }
        //public List<ProductClassificationModel> Classifications { get; set; }
        //public Dictionary<string, ColorDataModel> ColorDict { get; set; }
        //public List<KeyWordDataModel> KeyWords { get; set; }
        //public ProductMerchandisingModel Merchandising { get; set; }
        //public List<ProductSizeSchemeModel> SizeSchemes { get; set; }
        //public object Colors { get; set; }
        //public List<ProductExcludedColors> ExcludedColors { get; set; }

        //as well as definitions for all those subclasses as needed
    }



    

}
