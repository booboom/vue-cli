import http from './http'

const getPeople = function(){
	return http.get('api/people',{})
}

export default {
	getPeople
}
