"use client";

import { Collection } from "@/components/collection";
import { collectionService } from "@/services";
import { Product } from "@/services/product-service";
import React, { useEffect } from "react";

function MaleCollection() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState<Product[]>([]);

  const load = async () => {
    setIsLoading(true);
    try {
      const { data } = await collectionService.getMale();
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
      id="man_collection"
      items={items}
      title="Мужская коллекция"
    />
  );
}

export default MaleCollection;
