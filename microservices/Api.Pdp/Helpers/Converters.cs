using System.Linq;
using Api.Pdp.Models;

namespace Api.Pdp.Helpers
{
    public static class Converters
    {
        public static PdpModel toPdpModel(this recordsRecord pimRecord, string language = "EN", string region = "CA")

        {
            PdpModel pdpModel = new PdpModel();

            //details
            var productNo = pimRecord.fields.Where(x => x.name == "id").Select(x => x.values).First();
            pdpModel.Details.ProductNo = productNo.Length > 0 ? int.Parse(productNo[0].Value) : 0;
            var images =  pimRecord.fields.Where(x => x.name == "images").Select(x => x.values).First();
           

            //translated fields
            var names = pimRecord.fields.Where(x => x.name == "name").Select(x => x.values).First();
            var descriptions = pimRecord.fields.Where(x => x.name == "shortdescription").Select(x => x.values).First();
            pdpModel.Name = names.FirstOrDefault(x => x.language == language)?.Value;
            pdpModel.Details.TranslatedDescr = descriptions.FirstOrDefault(x => x.language == language)?.Value;
            pdpModel.Details.LargeImageUrl = images.First().Value;

            return pdpModel; 

        }
    }
}
