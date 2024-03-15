using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using comp4945_aspnetcore_app.Models;
using Microsoft.Extensions.Configuration;

namespace comp4945_aspnetcore_app.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            // Retrieve the API key from appsettings.json
            string googleMapsApiKey = _configuration["GoogleMapsApiKey"];
            
            // Check if the API key is missing or invalid
            if (string.IsNullOrEmpty(googleMapsApiKey))
            {
                // Log the error
                _logger.LogError("Google Maps API key is missing or invalid.");
            }

            // Use the API key as needed
            ViewData["GoogleMapsApiKey"] = googleMapsApiKey;
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}