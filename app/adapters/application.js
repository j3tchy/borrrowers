import DS from 'ember-data';
import config from '../config/environment'; 

export default DS.ActiveModelAdapter.extend({ 
	namespace: "api/v4",
	host: config.host,
	coalesceFindRequests: true  
});
