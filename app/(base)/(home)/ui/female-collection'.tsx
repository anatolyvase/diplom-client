"use client";

import { Collection } from "@/components/collection";
import { collectionService } from "@/services";
import { Product } from "@/services/product-service";
import React, { useEffect } from "react";

function FemaleCollection() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState<Product[]>([]);

  const load = async () => {
    setIsLoading(true);
    try {
      const { data } = await collectionService.getFemale();
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
    <Collection
      isLoading={isLoading}
      id="women_collection"
      items={items}
      title="Женская коллекция"
    />
  );
}

export default FemaleCollection;
