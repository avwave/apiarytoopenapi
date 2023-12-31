import OpenAPIParser from '@apidevtools/swagger-parser';
import { useEffect, useState } from 'react';

import { Flex, HStack, Image, Text, VStack } from '@stoplight/mosaic';

import logo from './zennya.svg';
import { useMobileLayout } from './utils/responsive';
const Header = ({ spec }) => {
  const [definition, setDefinition] = useState(null);
  const [version, setVersion] = useState(null);
  const [servers, setServers] = useState(null);
  const [openAPIVersion, setOpenAPIVersion] = useState(null);
  const [title, setTitle] = useState(null);

  const isMobile = useMobileLayout();

  useEffect(
    () => {
      if (!spec) return
      const options = {
        dereference: {
          circular: true
        }
      }
      OpenAPIParser.bundle(spec, options, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        setDefinition(result?.info?.description);
        setVersion(result?.info?.version);
        setOpenAPIVersion(result?.openapi);
        setServers(result?.servers);
        setTitle(result?.info?.title);
      }
      );
    }, [spec]
  );
  return (
    <Flex h="3xl" shrink={0} px={5} alignItems="center" bg="canvas-dark">
      <HStack w="1/3" alignItems="center" spacing={4}>
        <Image className='logo' src={logo} />
        <VStack>
          <Text fontSize="lg" fontWeight="semibold" lineHeight="none">
            {title}
          </Text>
          <Text fontSize="sm" fontWeight="normal" lineHeight="none">
            OpenAPI {openAPIVersion}
          </Text>
          <Text fontSize="sm" fontWeight="normal" lineHeight="none">
            Documentation {version}
          </Text>
        </VStack>

      </HStack>
      {isMobile ? null : (
        <>
          <Flex w="1/3" justifyContent="center">
            <Text fontSize="base" fontWeight="bold" lineHeight="relaxed">
              {definition}
            </Text>
          </Flex>
          <HStack w="1/3" flex={1} justifyContent="end">
            {/* <Button as="a" appearance="minimal" target="__blank" href="https://stoplight.io">
          Stoplight
        </Button> */}
            <Text fontSize="base" fontWeight="normal" lineHeight="none">
              {servers?.map(s => s.url)?.join(', ')}
            </Text>
          </HStack>
        </>
      )}

    </Flex>

  )
}

export { Header };

