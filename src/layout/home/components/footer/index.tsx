import { Box, Container, Typography } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'

export function Footer () {
  return (
    <>
      <Styles.Container>
        <Container size="lg">
          <Image
            src="/cool-doggo_square-paper-03.png"
            alt="logo"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </Container>
        <Container size="lg">
          <Box
            flexDirection={{
              '@initial': 'column',
              '@table-min': 'row'
            }}
            justifyContent="space-between" 
            gap={2}
          >
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">Categories</Typography>
              <Styles.List>
                <li>
                  <Link href="">Clothing</Link>
                </li>
                <li>
                  <Link href="">Women</Link>
                </li>
                <li>
                  <Link href="">Men</Link>
                </li>
                <li>
                  <Link href="">Shoes</Link>
                </li>
                <li>
                  <Link href="">New Arrivals</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">Our policy</Typography>
              <Styles.List>
                <li>
                  <Link href="">Brands</Link>
                </li>
                <li>
                  <Link href="">Contact us</Link>
                </li>
                <li>
                  <Link href="">About</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Coming soon</Link>
                </li>
                <li>
                  <Link href="">Shop</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">Get in touch</Typography>
              <Styles.List>
                <li>
                  <Link href="">
                    <span>Cool Doggo</span><br />
                    <span>P.O. Box 147 2546 Sociosqu Rd.</span><br />
                    <span>Bethlehem Utah 02913</span>
                  </Link>
                </li>
                <li>
                  <Link href="">guidasmoranes@gmail.com</Link>
                </li>
                <li>
                  <Link href="">(00351) 233 155 107</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">follow us</Typography>
              <Styles.List>
                <li>
                  <Link href="https://www.instagram.com/guidasmoranes/">Instagram</Link>
                </li>
                <li>
                  <Link href="https://www.behance.net/GuidaSMoranes">Behance</Link>
                </li>
              </Styles.List>
            </Box>
          </Box>
        </Container>
      </Styles.Container>
      <Container size="lg">
        <Box marginTop={3} marginBottom={3}>
          <Typography size="xsm">
            <b>Cool Doggo</b> {new Date().getFullYear()}. Powered with 🧡  by <b>Guida S. Moranes</b>.</Typography>
        </Box>
      </Container>
    </>
  )
}