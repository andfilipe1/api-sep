const soap = require( 'soap-as-promised' );
const sep = require( '../config/sep' );

module.exports = () => {
    var sepService = new Object();

    sepService.getDocumentInfo = function( processNumber ) {
        var args = {
            numeroProcesso: processNumber
        };

        return soap.createClient( sep.service_url )
        .then( client => client.ConsultarProcessoSimplesPorNumero( args ) );
    };

    return sepService;
};
