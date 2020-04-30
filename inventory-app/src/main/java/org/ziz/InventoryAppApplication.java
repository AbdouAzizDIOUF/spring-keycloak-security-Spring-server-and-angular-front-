package org.ziz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.ziz.entity.Product;
import org.ziz.repository.ProductRepository;

@SpringBootApplication
public class InventoryAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryAppApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ProductRepository productRepository){
		return args -> {
			productRepository.save(new Product(null, "Camion", 45));
			productRepository.save(new Product(null,"voiture", 30));
			productRepository.save(new Product(null, "avion", 51));
			productRepository.save(new Product(null, "vello", 51));
			productRepository.save(new Product(null, "train", 51));
			/*productRepository.findAll().forEach(System.out::print);*/
			productRepository.findAll().forEach(Product::toString);
		};
	}
}
