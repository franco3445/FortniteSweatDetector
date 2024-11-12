export async function takeScreenshot() {
    const stream = await navigator.mediaDevices.getDisplayMedia()

    try {
        const width = stream.getVideoTracks()
            .map((track) => track.getSettings().width)
            .filter(Boolean)
            .reduce(Math.max, 0)
        const height = stream.getVideoTracks()
            .map((track) => track.getSettings().height)
            .filter(Boolean)
            .reduce(Math.max, 0)

        const video = document.createElement("video")
        video.srcObject = stream
        video.autoplay = true

        await new Promise((resolve, reject) => {
            video.onloadeddata = resolve
            video.onerror = reject
        })

        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        canvas.getContext("2d").drawImage(video, 700, 700,300,50, 0,0,300,50)

        return canvas.toDataURL()
    } finally {
        stream.getTracks().forEach((track) => track.stop())
    }
}