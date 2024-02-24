const coinApi = require("../config/axiosconfig")

module.exports.getCompaniesList = async(req,res) => {
    try {
        const {currency} = req.body;
        const response = await coinApi.get(`/companies/public_treasury/${currency}`);

        const companies = response.data.companies;
        const company_list = companies.map((company) => {
            return company.name;
        });

        res.status(200).json({
            companies: company_list
        });
    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}