using System.Web;
using System.Web.Mvc;

namespace CH09_The_Anatomy_of_an_AngularJS_App
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
