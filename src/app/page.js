"use client";
import { nftCategories } from "@/assets/data";
import LandingPageNavbar from "@/Components/Comon/LandingPageNavbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

export default function Home() {
  const { control, watch, handleSubmit, setValue } = useForm();
  const selectedCategory = watch("category");

  // Filter the NFTs based on the selected category
  const filteredNFTs =
    nftCategories.find((cat) => cat.category === selectedCategory)?.nfts || [];

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Box h="90vh">
      <LandingPageNavbar />
      <Box
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <SimpleGrid columns={2} spacing={2}>
          <Box
            w="350px"
            h="450px"
            bg="#0b1120"
            borderRadius="md"
            boxShadow="lg"
            border="1px solid #f8fafc14"
            p={2}
          >
            <Image
              src="https://assets.entrepreneur.com/content/3x2/2000/1615220129-GettyImages-1140885572.jpg"
              alt="nft"
              h="100%"
              w="100%"
              objectFit="cover"
            />
          </Box>
          <Box
            w="350px"
            h="450px"
            bg="#0b1120"
            borderRadius="md"
            boxShadow="lg"
            p={2}
            border="1px solid #f8fafc14"
          >
            <Box>
              <Box
                textAlign="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
                my={5}
              >
                <Image
                  h={16}
                  w={16}
                  borderRadius="full"
                  src="https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg"
                  alt="brand"
                />
              </Box>
              <Box as="form" mt={5} onSubmit={handleSubmit(onSubmit)}>
                {/* Category Select Field */}
                <FormControl>
                  <FormLabel fontWeight="normal" fontSize="sm">
                    Select NFT Category
                  </FormLabel>
                  <Controller
                    name="category"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        fontWeight="normal"
                        fontSize="sm"
                        placeholder="Select NFT category"
                        bg="#1e293b"
                        border="none"
                        _focus={{
                          outline: "none",
                          border: "none",
                          ring: "none",
                        }}
                      >
                        {nftCategories.map((category, index) => (
                          <option key={index} value={category.category}>
                            {category.category}
                          </option>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>

                {/* NFT Name Select Field (Dynamically Populated) */}
                {selectedCategory && (
                  <FormControl mt={4}>
                    <FormLabel fontWeight="normal" fontSize="sm">
                      Select NFT Name
                    </FormLabel>
                    <Controller
                      name="nft"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          fontWeight="normal"
                          fontSize="sm"
                          placeholder="Select NFT"
                          bg="#1e293b"
                          border="none"
                          _focus={{
                            outline: "none",
                            border: "none",
                            ring: "none",
                          }}
                        >
                          {filteredNFTs.map((nft, index) => (
                            <option key={index} value={nft.name}>
                              {nft.name}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                )}

                <Button
                  mt={4}
                  bg="#0284c7"
                  w="100%"
                  borderRadius="md"
                  size="md"
                  _hover={{ background: "#0284c7" }}
                  color="white"
                  fontWeight="normal"
                  type="submit"
                >
                  Mint
                </Button>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
