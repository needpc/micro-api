# Docs

## Tools

- UML 
    - planter (Golang, https://github.com/achiku/planter)
    - plantuml (Java, http://plantuml.com/download)

- RAML
    - raml2html (NodeJS, https://www.npmjs.com/package/raml2html)

## Commands

### RAML

`npm run doc:generate`   
In the background : `raml2html docs/api.raml > public/index.html`

### UML database (screen)

`planter postgres://node@localhost/dev-node?sslmode=disable -o output.uml`    
`java -jar plantuml.jar -verbose output.uml`



