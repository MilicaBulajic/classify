import React from 'react';
import { useForm } from "react-hook-form";

const OnboardPage = (props) => {
    const { register, handleSubmit, errors } = useForm();
    
    return (
        <div>
            Welcome to Onboard, please choose the team!
        </div>
    );
};

export default OnboardPage;