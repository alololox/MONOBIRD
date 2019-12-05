using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cdp_api.models;


namespace cdp_api.Helpers
{
    public static class Converters
    {
        public static CDP toCDP(this recordsRecord pimRecord,string language = "en", string region = "ca")
        {
            var names = pimRecord.fields.Where(x => x.name == "name").Select(x => x.values).First();

            CDP cDP = new CDP();
            cDP.Name = names.FirstOrDefault(x => x.language == "EN")?.Value;
         //   cDP.Original = pimRecord; 
            return cDP; 

        }
    }
}
