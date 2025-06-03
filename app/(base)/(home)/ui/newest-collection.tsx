"use client";

import { Collection } from "@/components/collection";
import { collectionService } from "@/services";
import { Product } from "@/services/product-service";
import React, { useEffect } from "react";

function NewestCollection() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState<Product[]>([]);

  const load = async () => {
    setIsLoading(true);
    try {
      const { data } = await collectionService.getNewest();
      setItems(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <Collection isLoading={isLoading} id="new" items={items} title="Новинки" />
  );
}

export default NewestCollection;
