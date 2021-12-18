import 'module-alias/register'
import { addAliases } from 'module-alias'

addAliases({
    "@controllers": `${__dirname}/controllers/`,
    "@models": `${__dirname}/models/`,
    "@routes": `${__dirname}/routes/`,
    "@util": `${__dirname}/util/`,
})