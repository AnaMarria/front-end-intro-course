Subsections:



#### I. CSS

1. [Anatomy of a CSS rule](#cssRuleAnatomy)
2. [Different ways of adding style](#waysOfStyling)
3. [Styling examples](#stylingExamples)
4. CSS selectors
5. The nature of the cascade
6. Positioning
7. Dimensions & Responsiveness
8. Advanced styling

#### II. CSS Libraries (Bootstrap)

1. The concept of a styling library
2. Bootstrap Overview
3. The Grid
4. Helper Classes
5. Components
   1. Navbar
   2. Responsive Images

#### III. CSS Pre-Processors

1. CSS Pre-Processing
2. Node.js & CLIs
3. SCSS overview
4. [node-sass](#node-saas)



------



<h1 id="cssRuleAnatomy">Anatomy of a CSS rule</h1>



Any CSS rule has 2 parts: a selector and a set of property-value pairs.



> selector{
>
> property1 : value_X;
>
> property2 : value_Y;
>
> }



<h1 id="waysOfStyling">Different ways of applying style</h1>



There are 3+1 ways of adding style to your page.



![](_img/bravo-ai-stil.png)





1. Inline using the style attribute

```
<p style="color:red; font-wright:bold">Lorem Impum</p>
```



2. At the document level using using the <style> tag

   ```
   <style>
   	#myelement{
           background-color:red;
           border:1px solid red;
   	}
   </style>
   ```

   

3. Using an external CSS file

```
<link href="mystyle.css">
```



4. Altering the DOM using JavaScript

```
document.body.style.backgroundColor = "red";
```





<h1 id="stylingExamples">Styling Examples</h1>



See exercise files [here](../src/02_CSS/readme.md). 



<h1 id="node-saas">node-saas</h1>



Installing:

```
npm install node-sass
```

Running 

```
node-sass scss -o css -w
```

