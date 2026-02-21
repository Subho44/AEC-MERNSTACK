const express = require("express");
const soap = require("soap");
const http = require("http");

const service = {
  CalculatorService: {
    CalculatorPort: {
      Add(args) {
        return { result: args.a + args.b };
      }
    }
  }
};

const xml = `
<definitions name="CalculatorService"
 xmlns="http://schemas.xmlsoap.org/wsdl/"
 xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/">
</definitions>
`;

const app = express();
const server = http.createServer(app);

soap.listen(server, "/wsdl", service, xml);

server.listen(3000);