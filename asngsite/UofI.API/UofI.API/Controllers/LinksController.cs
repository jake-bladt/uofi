using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using UofI.API.Models;

namespace UofI.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LinksController : ControllerBase
    {
        private readonly ILogger<LinksController> _logger;

        public LinksController(ILogger<LinksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Link> Get()
        {
            return new List<Link>
            {
                new Link { Title = "Using machine learning for sentiment analysis: a deep dive", 
                    Url = "https://algorithmia.com/blog/using-machine-learning-for-sentiment-analysis-a-deep-dive"},
                new Link { Title = "IP addresses in Azure Functions",
                    Url = "https://docs.microsoft.com/en-us/azure/azure-functions/ip-addresses"},
                new Link { Title = "Running AWS IAM Access Analyzer at Deployment Time",
                    Url = "https://www.pulumi.com/blog/aws-iam-access-analyzer-and-crossguard/"},
                new Link { Title = "Build Your Own OAuth2 Server in Go",
                    Url = "https://hackernoon.com/build-your-own-oauth2-server-in-go-7d0f660732c3"}
            };
        }
    }
}
