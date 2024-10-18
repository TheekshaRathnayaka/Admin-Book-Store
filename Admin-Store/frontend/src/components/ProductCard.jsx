import { Box, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (

    <Box shadow='lg'
          rounded='lg'
          overflow='hidden'
          transition='all 0.3s'
          _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
          bg={bg}>

      <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

      <Box p={4}>

        <Heading as='h3' size='md' mb={2}>
					{product.name}
		</Heading>

        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
		</Text>

		<HStack spacing={2}>

			<IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
					
            <IconButton
						icon={<DeleteIcon />}
						onClick={() => handleDeleteProduct(product._id)}
						colorScheme='red'/>

		</HStack>

      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        
		<ModalOverlay />

        <ModalContent>

        	<ModalHeader>Update Book</ModalHeader>

			<ModalCloseButton />
          
				<ModalBody>
						
					<VStack spacing={4}>
							<Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>

							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
					</VStack>

				</ModalBody>
				
        	</ModalContent>

      </Modal>

    </Box>
  )
};

export default ProductCard;
