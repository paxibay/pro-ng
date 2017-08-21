using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CH09_The_Anatomy_of_an_AngularJS_App.Startup))]
namespace CH09_The_Anatomy_of_an_AngularJS_App
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
