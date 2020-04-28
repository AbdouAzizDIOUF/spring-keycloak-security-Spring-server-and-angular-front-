package org.ziz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.ziz.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
