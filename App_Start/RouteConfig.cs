using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CH09_The_Anatomy_of_an_AngularJS_App
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);


            routes.MapRoute(
                name: "Products01_ngview",
                url: "Products01_ngview/{*catchall}",
                defaults: new { controller = "Ch22", action = "Products01_ngview" });


            //routes.MapRoute(
            //    name: "customer",
            //    url: "customer/{*catchall}",
            //    defaults: new { controller = "Home", action = "Cusmer" });

            routes.MapMvcAttributeRoutes();

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
