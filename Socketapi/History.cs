using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;
using Newtonsoft.Json;

namespace Socketapi
{
    internal class History
    {
        public List<string> messages { get; set; } = new List<string>();
        public string id { get; set; }
        public History(string username)
        {
            this.id = username;
        }
    }
}
