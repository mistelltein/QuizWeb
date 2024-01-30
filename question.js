let questions = [
    {
        numb: 1,
        question: "What does MVC stand for in ASP.NET Core?",
        answer: "B. Model View Controller",
        options: [
            "A. Model View Component",  
            "B. Model View Controller",
            "C. Microsoft Visual Core",
            "D. Multiple View Configuration"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is the default templating engine used in ASP.NET Core MVC?",
        answer: "A. Razor",
        options: [
            "A. Razor",
            "B. Handlebars",
            "C. Mustache",
            "D. Twig"
        ]
    },    
    {
        numb: 3,
        question: "What is the purpose of the Startup.cs file in an ASP.NET Core MVC application?",
        answer: "A. To configure routing",
        options: [
            "A. To configure routing",
            "B. To define model classes",
            "C. To manage database connections",
            "D. To declare controller actions"
        ]
    },
    {
        numb: 4,
        question: "In ASP.NET Core MVC, what attribute is used to specify that a parameter should be bound using the request's route data?",
        answer: "C. [RouteData]",
        options: [
            "A. [FromBody]",
            "B. [FromQuery]",
            "C. [RouteData]",
            "D. [Route]"
        ]
    },
    {
        numb: 5,
        question: "Which middleware is used for handling errors in ASP.NET Core MVC?",
        answer: "B. UseExceptionHandler",
        options: [
            "A. UseErrorPages",
            "B. UseExceptionHandler",
            "C. UseErrorHandling",
            "D. UseErrorMiddleware"
        ]
    },
    {
        numb: 6,
        question: "What is the role of the IActionResult interface in ASP.NET Core MVC?",
        answer: "C. To represent the result of an action method",
        options: [
            "A. To handle HTTP requests",
            "B. To define a model class",
            "C. To represent the result of an action method",
            "D. To create a view component"
        ]
    },
    {
        numb: 7,
        question: "What is the purpose of the [Authorize] attribute in ASP.NET Core MVC?",
        answer: "A. To restrict access to authorized users",
        options: [
            "A. To restrict access to authorized users",
            "B. To define a custom route",
            "C. To enable session management",
            "D. To handle exception handling"
        ]
    },
    {
        numb: 8,
        question: "Which built-in dependency injection container is used by default in ASP.NET Core?",
        answer: "B. Microsoft.Extensions.DependencyInjection",
        options: [
            "A. Auto",
            "B. Microsoft.Extensions.DependencyInjection",
            "C. Unity",
            "D. Inject"
        ]
    },
    {
        numb: 9,
        question: "What is the purpose of the IActionResult return type in an action method?",
        answer: "A. To represent the result of an action",
        options: [
            "A. To represent the result of an action",
            "B. To define a model class",
            "C. To configure routing",
            "D. To manage database connections"
        ]
    },
    {
        numb: 10,
        question: "What is the purpose of the [Produces] attribute in ASP.NET Core MVC?",
        answer: "B. To specify the expected response content types",
        options: [
        "A. To define a custom route",
        "B. To specify the expected response content types",
        "C. To manage database connections",
        "D. To handle exception handling"
    ]
    },
    {
        numb: 11,
        question: "What is the purpose of the [ApiController] attribute in ASP.NET Core?",
        answer: "B. To indicate that a class is an API controller",
        options: [
            "A. To define a model class",
            "B. To indicate that a class is an API controller",
            "C. To enable session management",
            "D. To handle exception handling"
        ]
    },
    {
        numb: 12,
        question: "Which middleware is used for managing authentication in ASP.NET Core MVC?",
        answer: "C. UseAuthentication",
        options: [
            "A. UseAuthorization",
            "B. UseIdentity",
            "C. UseAuthentication",
            "D. UseSecurity"
        ]
    },
    {
        numb: 13,
        question: "What is the purpose of the TempData in ASP.NET Core MVC?",
        answer: "A. To store data for a single request",
        options: [
            "A. To store data for a single request",
            "B. To manage database connections",
            "C. To configure routing",
            "D. To define model classes"
        ]
    },
    {
        numb: 14,
        question: "In ASP.NET Core MVC, what is the role of the ViewStart.cshtml file?",
        answer: "D. To define default layout and view data",
        options: [
            "A. To configure routing",
            "B. To handle HTTP requests",
            "C. To declare controller actions",
            "D. To define default layout and view data"
        ]
    },
    {
        numb: 15,
        question: "What is the purpose of the [ValidateAntiForgeryToken] attribute in ASP.NET Core MVC?",
        answer: "B. To prevent cross-site request forgery (CSRF) attacks",
        options: [
            "A. To enable session management",
            "B. To prevent cross-site request forgery (CSRF) attacks",
            "C. To handle exception handling",
            "D. To define a custom route"
        ]
    },
    {
        numb: 16,
        question: "What is the purpose of the [AllowAnonymous] attribute in ASP.NET Core MVC?",
        answer: "A. To allow access to unauthorized users",
        options: [
            "A. To allow access to unauthorized users",
            "B. To restrict access to authorized users",
            "C. To define a custom route",
            "D. To handle exception handling"
        ]
    },
    {
        numb: 17,
        question: "Which interface is commonly used for logging in ASP.NET Core MVC?",
        answer: "C. ILogger",
        options: [
            "A. ILogProvider",
            "B. ILoggingService",
            "C. ILogger",
            "D. ILogManager"
        ]
    },
    {
        numb: 18,
        question: "What is the purpose of the [ValidateAntiForgeryToken] attribute in ASP.NET Core MVC?",
        answer: "B. To prevent cross-site request forgery (CSRF) attacks",
        options: [
            "A. To enable session management",
            "B. To prevent cross-site request forgery (CSRF) attacks",
            "C. To handle exception handling",
            "D. To define a custom route"
        ]
    },
    {
        numb: 19,
        question: "Which attribute is used to specify the route for an action method in ASP.NET Core MVC?",
        answer: "D. [Route]",
        options: [
            "A. [ActionRoute]",
            "B. [MethodRoute]",
            "C. [ActionPath]",
            "D. [Route]"
        ]
    },
    {
        numb: 20,
        question: "What is the purpose of the TempData in ASP.NET Core MVC?",
        answer: "A. To store data for a single request",
        options: [
            "A. To store data for a single request",
            "B. To manage database connections",
            "C. To configure routing",
            "D. To define model classes"
        ]
    },
    {
        numb: 21,
        question: "In ASP.NET Core MVC, what is the role of the ViewStart.cshtml file?",
        answer: "D. To define default layout and view data",
        options: [
            "A. To configure routing",
            "B. To handle HTTP requests",
            "C. To declare controller actions",
            "D. To define default layout and view data"
        ]
    },
    {
        numb: 22,
        question: "What is the purpose of the [Produces] attribute in ASP.NET Core MVC?",
        answer: "B. To specify the expected response content types",
        options: [
            "A. To define a custom route",
            "B. To specify the expected response content types",
            "C. To manage database connections",
            "D. To handle exception handling"
        ]
    },
    {
        numb: 23,
        question: "What is the purpose of the [ApiController] attribute in ASP.NET Core?",
        answer: "B. To indicate that a class is an API controller",
        options: [
            "A. To define a model class",
            "B. To indicate that a class is an API controller",
            "C. To enable session management",
            "D. To handle exception handling"
        ]
    },
    {
        numb: 24,
        question: "Which middleware is used for managing authentication in ASP.NET Core MVC?",
        answer: "C. UseAuthentication",
        options: [
            "A. UseAuthorization",
            "B. UseIdentity",
            "C. UseAuthentication",
            "D. UseSecurity"
        ]
    },
    {
        numb: 25,
        question: "What is the purpose of the [ValidateAntiForgeryToken] attribute in ASP.NET Core MVC?",
        answer: "B. To prevent cross-site request forgery (CSRF) attacks",
        options: [
            "A. To enable session management",
            "B. To prevent cross-site request forgery (CSRF) attacks",
            "C. To handle exception handling",
            "D. To define a custom route"
        ]
    },
    {
        numb: 26,
        question: "Which attribute is used to specify the route for an action method in ASP.NET Core MVC?",
        answer: "D. [Route]",
        options: [
            "A. [ActionRoute]",
            "B. [MethodRoute]",
            "C. [ActionPath]",
            "D. [Route]"
        ]
    },
    {
        numb: 27,
        question: "What is the purpose of the [AllowAnonymous] attribute in ASP.NET Core MVC?",
        answer: "A. To allow access to unauthorized users",
        options: [
            "A. To allow access to unauthorized users",
            "B. To restrict access to authorized users",
            "C. To define a custom route",
            "D. To handle exception handling"
        ]
    },
    {
        numb: 28,
        question: "Which interface is commonly used for logging in ASP.NET Core MVC?",
        answer: "C. ILogger",
        options: [
            "A. ILogProvider",
            "B. ILoggingService",
            "C. ILogger",
            "D. ILogManager"
        ]
    },
    {
        numb: 29,
        question: "What is the purpose of the [ValidateAntiForgeryToken] attribute in ASP.NET Core MVC?",
        answer: "B. To prevent cross-site request forgery (CSRF) attacks",
        options: [
            "A. To enable session management",
            "B. To prevent cross-site request forgery (CSRF) attacks",
            "C. To handle exception handling",
            "D. To define a custom route"
        ]
    },
    {
        numb: 30,
        question: "Which attribute is used to specify the route for an action method in ASP.NET Core MVC?",
        answer: "D. [Route]",
        options: [
            "A. [ActionRoute]",
            "B. [MethodRoute]",
            "C. [ActionPath]",
            "D. [Route]"
        ]
    },
];