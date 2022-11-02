package com.casestudy.model.employee;

import java.util.Map;

public class EmployeeResponse {
    private  boolean validated;
    public Map<String, String> errorMessage;

    public EmployeeResponse() {
    }

    public EmployeeResponse(boolean validated) {
        this.validated = validated;
    }

    public Map<String, String> getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(Map<String, String> errorMessage) {
        this.errorMessage = errorMessage;
    }

    public void setValidated(boolean validated) {
        this.validated = validated;
    }
}
