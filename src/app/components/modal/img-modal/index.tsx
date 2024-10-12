import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  UseDisclosureProps,
  useDisclosure,
} from '@chakra-ui/react'

interface ImgModalProps {
  render: (renderProps: UseDisclosureProps) => React.ReactNode
  imgSrc: string
}


const ImgModal = ({
  render,
  imgSrc
}: ImgModalProps) => {
  const disclosure = useDisclosure()

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
      >
        <ModalOverlay />
        <ModalContent w="fit-content" rounded="lg">
          <ModalHeader></ModalHeader>
          <ModalCloseButton color="#2C9BC2" />
          <ModalBody textAlign="center" pt="20px">
            <Image src={imgSrc} />
          </ModalBody>
        </ModalContent>
      </Modal >
      {
        render({
          ...disclosure,
        })
      }
    </>
  )
}

export default ImgModal