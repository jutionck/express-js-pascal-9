const DbQuery = () => {
    const INSERT_BIODATA = `INSERT INTO biodata (first_name,last_name,dob,pob,address,marital_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const UPDATE_BIODATA = `UPDATE biodata set first_name = $1,last_name = $2,dob = $3,pob = $4,address = $5,marital_status=$6 where id=$7 RETURNING *`;
    const DELETE_BIODATA = `DELETE FROM biodata where id=$1`;
    const SELECT_BIODATA_LIST = `SELECT id,first_name,last_name,dob,pob,address,marital_status from biodata order by id desc`;
    const SELECT_BIODATA_ID = `SELECT id,first_name,last_name,dob,pob,address,marital_status from biodata where id = $1`;
    const SELECT_BIODATA_SEARCH = `SELECT id,first_name,last_name,dob,pob,address,marital_status from biodata where first_name ilike $1 or last_name ilike $1 or dob ilike $1 or pob ilike $1 or address ilike $1 or marital_status ilike $1`

    return {
        INSERT_BIODATA, UPDATE_BIODATA, DELETE_BIODATA, SELECT_BIODATA_LIST, SELECT_BIODATA_ID, SELECT_BIODATA_SEARCH
    }
}

module.exports = DbQuery
