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
            var x = pimRecord.fields.Where(x => x.name == "id").Select(x => x.values).First();
            pdpModel.Details.ProductNo = x.Length > 0 ? int.Parse(x[0].Value) : 0;
            //pdpModel.Details.ProductNo = int.Parse(pimRecord.fields.Where(x => x.name == "id").Select(x => x.values).First()[0].Value.ToString());
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
