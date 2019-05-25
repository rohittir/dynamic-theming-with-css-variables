# dynamic-theming-with-css-variables
An Angular application that provides a way to change it's color and styles at runtime using custom css properties/variables

LIVE Example: http://dynamic-theming.s3-website-us-east-1.amazonaws.com

What is the advantage of this and how to apply different themes?

Ans: 
There are json files defined in src/assets folder that contains various color variables which are used in Angular application. One can simply edit these JSON files to change the theme OR can add a new json file to add a new theme.
The biggest advantage of this is, one can externalize these json files into external database such as DynamoDB, which will be accessed using an API call and various themes can be applied at runtime without re-compiling the Angular application.

Here, I have used simple CSS custom variables concept for colors and font. One can apply this in large enterprise applications to simplify their dynamic theming requirements.

