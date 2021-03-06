﻿using System.Web;
using System.Web.Optimization;

namespace CH09_The_Anatomy_of_an_AngularJS_App
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/AwesomeAngularMVCApp")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .Include("~/Scripts/AwesomeAngularMVCApp.js"));

            BundleTable.EnableOptimizations = true;
        }
    }


    //public class BundleConfig
    //{
    //    // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
    //    public static void RegisterBundles(BundleCollection bundles)
    //    {
    //        bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
    //                    "~/Scripts/jquery-{version}.js"));

    //        bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
    //                    "~/Scripts/jquery.validate*"));

    //        // Use the development version of Modernizr to develop with and learn from. Then, when you're
    //        // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
    //        bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
    //                    "~/Scripts/modernizr-*"));

    //        bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
    //                  "~/Scripts/bootstrap.js",
    //                  "~/Scripts/respond.js"));

    //        bundles.Add(new StyleBundle("~/Content/css").Include(
    //                  "~/Content/bootstrap.css",
    //                  "~/Content/site.css"));

    //        // Set EnableOptimizations to false for debugging. For more information,
    //        // visit http://go.microsoft.com/fwlink/?LinkId=301862
    //        BundleTable.EnableOptimizations = true;
    //    }
    //}

}
