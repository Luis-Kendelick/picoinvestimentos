import { cn } from "@/lib/utils"


const YoutubeEmbed = ({ embedId, className }: {
    embedId: string
    className?: string
}) => (
    <div className={cn('overflow-hidden aspect-video relative pb-[56.25%] rounded-2xl', className)}>
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className='absolute top-0 left-0 w-full h-full'
        />
    </div>
);

export default YoutubeEmbed;