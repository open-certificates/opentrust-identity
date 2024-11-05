// import { printSchemaWithDirectives } from "@graphql-tools/utils";
// import { GraphQLSchema, stripIgnoredCharacters } from "graphql";

// const print = (schema: string) => `
//   import { gql } from "@apollo/client/core"
//   export const typeDefs = gql\`${schema}\`;
// `;

// export const plugin = (schema: GraphQLSchema) =>
//   print(stripIgnoredCharacters(printSchemaWithDirectives(schema)));

// ****************************************************************************
//
// From https://github.com/dotansimha/graphql-code-generator/issues/3899
//
// ****************************************************************************

var graphqlUtils = require('@graphql-tools/utils');
var graphql = require('graphql');

// https://github.com/dotansimha/graphql-code-generator/issues/3899
var print = function (schema) {

  var escapedSchema = schema
    .replace(/\\`/g, '\\\\`')
    .replace(/`/g, '\\`');

  // import { gql } from "@apollo/client/core"
  return "\n"
    + "import gql from 'graphql-tag';"
    + "\n"
    + "export const typeDefs = gql(`" + escapedSchema + "`);"
}


module.exports = {
  plugin: function(schema) {
    return print(
      graphql.stripIgnoredCharacters(
        graphqlUtils.printSchemaWithDirectives(schema)
      )
    );
  }
};