package org.ziz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.ziz.repository.ProductRepository;

@Controller
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/")
    public String index(Model model){
        //model.addAttribute("products", productRepository.findAll());
        return "index";
    }

    @GetMapping("/product")
    public String product(Model model){
        model.addAttribute("products", productRepository.findAll());
        return "product";
    }
}
