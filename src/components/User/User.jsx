import PropTypes from 'prop-types'

export const User = ({ user: { name, email } }) => {
    return (<>
        <p>User name: {name}</p>
        <p>User email: {email}</p>
        
    </>);
}

User.propTypes = {
    user: PropTypes.shape({
    name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
}