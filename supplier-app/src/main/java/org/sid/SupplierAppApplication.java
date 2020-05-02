package org.sid;

import org.sid.entity.Supplier;
import org.sid.repository.SupplierRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.stream.Stream;

@CrossOrigin("*")
@SpringBootApplication
public class SupplierAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(SupplierAppApplication.class, args);
    }

    @Bean
    CommandLineRunner start(SupplierRepository supplierRepository, RepositoryRestConfiguration repositoryRestConfiguration){
        return args -> {
            repositoryRestConfiguration.exposeIdsFor(Supplier.class);
            Stream.of("IBM", "HP", "NOKIA").forEach(name->{
                supplierRepository.save(new Supplier(null, name, "email@"+name+".sn"));
            });

            supplierRepository.findAll().forEach(Supplier::toString);
        };
    }
}
