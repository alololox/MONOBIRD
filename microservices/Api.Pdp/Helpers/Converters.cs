using System.Linq;
using Api.Pdp.Models;

namespace Api.Pdp.Helpers
{
    public static class Converters
    {
        public static PdpModel toPdpModel(this recordsRecord pimRecord, string language = "en", string region = "ca")
        {
            PdpModel pdpModel = new PdpModel();

            //details
            var productNo = pimRecord.fields.Where(x => x.name == "id").Select(x => x.values).First();
            pdpModel.Details.ProductNo = productNo.Length > 0 ? int.Parse(productNo[0].Value) : 0;
            pdpModel.Details.LargeImageUrl = "https://images-dynamic-arcteryx.imgix.net/F19/450x625/Axe-Keeper-Black.png?auto=format"; //hardcoded for now

            //translated fields
            var names = pimRecord.fields.Where(x => x.name == "name").Select(x => x.values).First();
            var descriptions = pimRecord.fields.Where(x => x.name == "shortdescription").Select(x => x.values).First();
            pdpModel.Name = names.FirstOrDefault(x => x.language == language)?.Value;
            pdpModel.Details.TranslatedDescr = descriptions.FirstOrDefault(x => x.language == language)?.Value;


            //   cDP.Original = pimRecord; 
            return pdpModel; 
        }
    }
}
