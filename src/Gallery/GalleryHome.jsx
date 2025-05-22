import GallerPg from "./GalleryPg"
import GallerryHead from "./GalleryHead"
import ImageGrid from "./GalleryPg"

export default function GalleryHome() {
    return (
        <>
            <GallerryHead />
            <ImageGrid />
            <GallerPg/>
        </>
    )
}
