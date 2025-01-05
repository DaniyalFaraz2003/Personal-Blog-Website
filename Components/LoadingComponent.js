import React from 'react';

const LoadingComponent = () => {
    return (
        <div style={styles.container}>
            <div style={styles.spinner}></div>
            <p>Loading ...</p>
            <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                `}
            </style>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    spinner: {
        width: '50px',
        height: '50px',
        border: '5px solid #ccc',
        borderTop: '5px solid #333',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    },
};

export default LoadingComponent;
