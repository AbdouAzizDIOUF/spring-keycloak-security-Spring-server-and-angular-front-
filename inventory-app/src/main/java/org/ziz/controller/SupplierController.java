package org.ziz.controller;

import lombok.Data;
import org.keycloak.adapters.springsecurity.client.KeycloakRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.ziz.entity.Supplier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Objects;

@Controller
public class SupplierController {

    private final KeycloakRestTemplate keycloakRestTemplate;

    public SupplierController(KeycloakRestTemplate keycloakRestTemplate) {
        this.keycloakRestTemplate = keycloakRestTemplate;
    }

    @GetMapping("/suppliers")
    public String suppliers(Model model){
        ResponseEntity<PagedModel<Supplier>> response =
                keycloakRestTemplate.exchange("http://localhost:8051/suppliers", HttpMethod.GET, null, new ParameterizedTypeReference<PagedModel<Supplier>>() {});
        model.addAttribute("suppliers", Objects.requireNonNull(response.getBody()).getContent());

        return "suppliers";
    }

    @ExceptionHandler(Exception.class)
    public String exception(){
        return "errors";
    }
}