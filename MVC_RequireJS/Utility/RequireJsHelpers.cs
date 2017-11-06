//Source: http://blog.novanet.no/making-requirejs-play-nice-with-asp-net-mvc/

using System.IO;
using System.Text;
using System.Web.Mvc;

namespace MVC_RequireJS.Utility
{
    public static class RequireJsHelpers
    {
        public static MvcHtmlString RequireJs(this HtmlHelper helper, string config, string module)
        {
            var require = new StringBuilder();

            string jsLocation = "/Scripts/app/";


            if (File.Exists(helper.ViewContext.HttpContext.Server.MapPath(Path.Combine(jsLocation, module + ".js"))))
            {
                require.AppendLine("require( [ \"" + jsLocation + config + "\" ], function() {");
                require.AppendLine("    require( [ \"" + module + "\"] );");
                require.AppendLine("});");
            }

            return new MvcHtmlString(require.ToString());
        }

        public static MvcHtmlString ViewSpecificRequireJS(this HtmlHelper helper)
        {
            var action = helper.ViewContext.RouteData.Values["action"];
            var controller = helper.ViewContext.RouteData.Values["controller"];

            return helper.RequireJs("config.js", string.Format("views/{0}/{1}", controller, action));
        }
    }

}