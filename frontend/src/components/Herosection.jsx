import { ReactTyped } from "react-typed";

const Herosection = () => {
  return (
    <div className="mx-auto px-4 flex flex-col-reverse sm:flex md:flex-row max-w-screen-lg">
      <div className="mt-52 flex flex-wrap justify-between items-center gap-40">
        {/* Left Section */}
        <div className="md:flex-1 space-y-6">
          <h1 className="font-extrabold text-4xl md:text-5xl leading-tight">
            Welcome to
            <br />
            <span className="text-primary">
              <ReactTyped
                strings={["ElectroStore"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p className="text-gray-400 text-lg text-justify leading-relaxed">
            Discover the latest electronics at unbeatable prices. Whether its
            smartphones, laptops, or accessories, we bring you the best deals
            with top-notch quality. Shop with confidence and upgrade your tech
            today!
          </p>
          <button className="btn btn-primary px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:scale-105 transition">
            Shop Now
          </button>
        </div>

        {/* Right Section - Product Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {[
            {
              src: "https://images.samsung.com/is/image/samsung/p6pim/uk/2302/feature/uk-feature-galaxy-s23-s918-535093922?$FB_TYPE_I_JPG$",
              alt: "Smartphone",
            },
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFV76Y0f4ENk28VIKJoOGYEjwCGDg1F6C_fYMCj2AwKZ9wEg9jmvtbBmKBl9gTjXfx1JE&usqp=CAU",
              alt: "Smartwatch",
            },
            {
              src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFRUXFxgXGBcVGBcYFxoYFxgYFxgYGBYYHSggGholHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUvLy4tLS0tLS0tLTctLS4tLS8tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADoQAAEDAgQDBgUDBAEEAwAAAAEAAhEDIQQSMUFRYXEFIoGRofATMrHB0QZC4QcUUvGiJGKy0nKCkv/EABsBAAIDAQEBAAAAAAAAAAAAAAIDAAQFAQcG/8QALhEAAgIBBAIAAgoDAQAAAAAAAAECEQMEEiExQVFh8AUTIjKBkbHB0eEjM3EU/9oADAMBAAIRAxEAPwDydJJJezGcJJJJQgxQhpJgCSbABEUzKhaQ5pIIIIIMEEXBB2KqZgkRuCjcpHmVG5Y+pQyJG5BUM7AWGnLdGUDl8/qIsciMoUZCZzVkzg3yHYCZOUTm8FX2N9HQSE9RzTENiBBvMmTfltbkhmEgls6MikeKeq0A2cHWBkTuASLgXBMeFpCBcIOkpGvJbkAHzTMDNpEZtY5K1T7Nef26WMbGULkl2cbSIqFLN5fz9lu9m9jVHkgAAgEkOOXQExJ3jZT4DAvFItOUNLhII7wIGsxPJXGFjBF3dSY4aDqqzlPJewS7n0NSpgW1iVcGFcGh+XukkTtPDkoGdoGMoa2JmIH11CuYOoyoQ2wdw49CqebT5ILd2gZYmuRq/eyABrSGwS3c5jdxJsbgTbRVGUHVHBrWkucQAGi/lxt6rYPZwiSb8IVd9HKPlkcfDRU4ZV4FNGaW2LcojunYmQCLOiQDJMdOCgrYN0TECYWrXw7qdiRJ1bHeAIaWzNoIdNp8ELsrhYZSGgWdq4auIOttk1ZWuUC17MGpSuUqjBEDkTbQ3EAzcLXxmEazUEEiYN7nlssuo2DcRG2isQybujhWa0kgNm8ARqTt6wo3DbzsrLvBJjAS0E5QXRMcTrta3FO3HUyuQImTnn5SLRxzTxtEeOyjItruenh74KUugEcSCfCQL62lWAaXwrB/xc//AGhmSPPNPhCK6CsoxbX37Ks4Ls+pUzmm2fhszuMgANBAJvtcW1VbSZ98EQOsW93RO64OguCdqZtzYXiY10RsmB3AZ0JB/KjIRJJJL3IWJJJJQgxQlEUBVXMEi0zD0jRe81gKgc0NpZXEuaQczs+giBY6yqLgiKByytRTQxAOUZUhQFYepQxAKSpRcGhxacrpgwYJETB3IkeYQFWKjAA0g5rAmxEHdt9eqq4cW9SXwCbIcPTBNzA4xKixAAMAyOPHmrOPxZqOLsrG5iTDGhrRJmA0aATAHJU5EbzsqWqnjjBY4Lny/wBgop3YgBBk3tAjXjfZAihHRAzDNYbkLOUbaCbEKJADy05JidASIJAMRMEeasPo03Bvws+aYIdBGlocAOaToLQ0EgSTBveIkRxj6LpewK9KmSQ25gyAJaQdpm0FHLGk6sTkybVdEOA/TzqZY6oQCRmynXYiRzBB5yuqFRvfcGU25i5zzGoO0dbrErulxdJ+5KDF49xbknmfsqM1untK6UsrVixmLBMN+UacY581QzFxhDUctTsPAZ3d7QXPPkmSlHFC3wkXeIoanhXBmbKco3i0qJuIuL72I1B2I5ro/wBRYpooy1oYAQIGkEH8BcFTxHe8UODMs0NyJF2rPUcODUpU3yDnbJjiCWuHmCq9bAk2kka78OC2v0DhaVbCAExUzOAzEBoHzcySS71UnaXZ7mftMXvcA9CvmtTilhyPb1f5FaXDo5PEYLlEDS6pjCOJ0M8rreqTN5iU9dhbTY5tQd7OMjSZGjTm27wjqApDNKgWkctXpkncqvi6rnkZjMCAYAMc41W82s6i9r2HvtvNrHSBOyxa4J2urmKdgySozywX9La305b+SGiXNcCwnMNCIJ4WVvE0i0lsgwdWmR4EFVg4tcC0wQQRFjIM69YVtO0CiGtTLLbn9vCDEGRY293UVQH5oib6QDfbkrlfFPe55e+S8kucbkkmSZ1klVvhk5g24aCTEiwN3XvEn1TIv2dRCWXj8b8feyTmkAGDBkzyuNeoRBuo+vX/AGowPzx2TEEhEkX3/KYu9+wpMoDdTmnSLRAvmnWdo8UAaN13g6CkkkvcRYkkklCDFAUZQlVcwSAKGEbgY6oFk5hiIyhKIpRz8PusjJG3SDQLGqcYiBESId/yET9D4IHuULlJz/8AOmoO/ZK3dgvEqOFO8NyiCc0nMCAGgWywZknWbCIGqVJoBBIkT6LHlgeWX6jLoBobldObNLcsRli+aTrPyx4o3tp5WZc+fvZ5jLr3ckX01ndOXagAQTuATvbNHPZRsbNkl4Nsjtl1g1MTsCfT3yVttgCDzi8ja/XqoXsIbEablamCwzi3LExfT1PLRI1EWV91nRYN9OlRNZ9J1QloABdlaHmZ0EkRcXGi5guJMm60e2MQSKdIGzG3/wDkZt4CPMqg5sBVaV2Pxw2oVCkXOAC6bDMygNb4/lZvZGFsXOBuDliNYtM7bea3ezwWGRBJDhcA6iNxGh12WP8ASOa3sXgkuXRm/qd3/TEmPmb91wFB11336xkYYTu/6NcuAoi6s/R3+j8Wdh0et/oxp/tgf+4/QD7LcfiYaSbzpJmLRMLJ/SdGMKydSHH/AJEBa2Ja22k73tyXz+rf+ebXtiJu2zJeCRYdVRc8jz93WriazmgtY45TBcNASNJ46lVBlIgjXfhf6WQQdIjRmVryeN1VrYWQ5wBgESYMSZtO0wfJaLqd4G/vVQiqWmWkg7EayOB4wrUJNdANGK+mIkwZJETfTWNYuqlRk32BF78bXWriIygZQIm4mXA6TJi0bcVRzQYN2kg5ZIBjcjfU+fNXoSF0Uajfenmq8Hb3/C1K2DqBoJY4NdLmkgwRYkgnURHSyduCYaDqhqta4Oa0U+9mIIdJmIsRx3T45ESzKcIJi8b/AHHLmgzETYXBFwN/C2hvzRPF/CEzSRMbgjz6pyDIyOn3TGRp9FJMA2BBEXv4j89VGb7okEhJJJL3EUJJJJQgxQlEUJVbKEgChcjQOWVnqg0RlExsmAhKJqzoJOfIbGqsgkHUKIqw6mSCQCQNSNtr8LlV5VTWQ2Tp9BRdk7apDHMGjnNcdNWhwF4n9x0PWbQBiBAM3m9jwgRb1SameLLjhHbuXglkZKTDcRb0/wBKZjGlpJdDhcCCc3SBY9VHnaGR+4ngIjlzkBZuZ1zYaOg7PeDQfULx3SBECQYMGDeNQj7IquIqEVAyGxHel4JAytgGDBJvAgHoadGo9oZQe1pDSHERDpN8ryLkDgdLrp+x+z6TGlzgZ+adgLzKoal7uBUYbJMxMThnlzcroMGQRIhSdkdl4nE1CMoyNu5wiImOu4U1bEz8SoABmJDQNhwE8Psu1/SvZw+ExkQ4guJM3JExAnQQFRk9qSXfgdJuMQ6HZNMUxrmBgtOmXiDvp6qyzs8CeHJaDqAAtrxg+StMw4ygk947DYflYmbDUmu32Lf2uXwecf1IeA2jTGnfcfHKB9CuDw7O8Oq7L+pdZrsTkboxjWnmTLyfJwHguZ7Kw2esxg/c4DzMLX0sdmGKfr+xsUkj2Ds7CinhqQzDNkbbe4k9Lpm3Oi1WYLM4BlyYAHHgoP7Rwd3u6Jgzy1XyuWMpzcq7ZUb8lejhabyWvJaA0kRF3RztErExFOD7ldNV+HTHdcCTrHegLI7RoDUfKfcqfdpHU2Yj65gNIEDzU2HYwFriRDZcQ8EsJbcM7t+9EbaqHEiND5fyiw1W14jQ6TuneLR0o4qscrmiwcQSBpaYje07H6LKqwBpe++1radb81r4tokwI9VmVhy6yrmFoUyCtinENBPdbdrdWidTlNrxfiqbyrNZ0AgTB1/lQFmusgWiI1Gs7ROnJW4UgSFrWyATY62sLxPPinLWNeZaKjATuW5m7aXHGEDyR5+/qgGsH+fBOoNEmLpUxlDM8wMweA2HWkNgmQDoTHRVrK7gu0TSDg1rZe19NxIDiWui/enKRGouqTnTt5Io30zoKSSS9zAEkkkoQYpBpOgnpyuUk0pGQJAEIHKUoHrO1GO4toJMiKdqYplj7tshhZZiXta9jXuDXgB7QSA4AhwzDeCAVTLbqSUxCHUxWbrs6uAGK9UwT/hCpHczZSZHzRItr4qoB5qZtQ5S2TEgxNpGhhLwwqDUiSb8FZjAXQ52UQbwTsYEDiYHirGDw7C0EkOcXZcgzZ2ixz8DuIUdLDl7g1okn3J5Leo4FtFsC7t3fjgFgauoTHRfBJgaLGHNVqSeQzOM8Tp5lbFbtH47fhszAR3nd0QxoknYToLlc265hX6VdrKTgJzOOWTpkFzHMniqGTJKQUYryRCsxr25rtzAAbkTc8rLs8F2/Skd4t5jX0+y4LC0s8vO9m8m/wA6+SOphy27UnJijk+8Q9apdoZmjv5mm9jI3v1uVYa8mCLDYnfZea9hdqvouDh3myMzCbO/Dua9Q7RrUnYF+JoVczRTcQCIc0xcOGxDtVk59Dlb5nx49/P/AA43GPUbPG/1Ji/j4mrU2c9xHSYGvIBX/wCnmC+Jjac6NJeeWUEj/llWJUiHGeQXbf0xw2U1KrhaAwRuCZcPRq0NTOOHA34Sr9js0z0z4DWd6eMQYM7GI0lZuOpaxqNgRHmpTUJJgaGIOo5FNWbF5XzspLJH7KpFOScXyU8HhS3MSYJEcxzVfE4J/wAJr3fKXEAnirOJxTzTIzQCQC2b207usLLxBIMZgYPOPPgq8nDhIlNr5+ejHxtMtlVqDoM8D9D5+S0MY4O9+qzaog6RorGN3GmRjYob304zeBJWdVHWdPfotCvSs08fsYWfVYeX+1axC5FN6s9m4ai/N8Wp8OKby3ul2ZwEtbrbqoKgGxnjaL+4UVVkRDg6QD3ZsSJymQLg2VrtcAlfFM9eXG089FXjgZ38VbxWJe/KHuc4NblbOzZJAHKSTbiq7S3eYgxAGsWnlKsRuuQkRZTp7lXKFPDCf7j42aZHw2sDS0gEGHHe54RCpkHb35bp6ri4y5xMANGYyYaIaL6AAARsiavyGnRCkkkvdBYkkklCDISiTJGQJAuj8qNxRlRlZOotINAlGwgnvk6HS5kNhovtIA5BAUJWRkdMYhiUgUxKZVXkalaConItKenexsOnuU2IDWkBji4ZWkkgN7xaC4QCbAkid40GisdlYf4lQN21PQa/jxViWeDTl6XINPo2+xMHkYXnV3o3b8pYsq32lixTbzOg97LnatdzjJP48l8nlyPJNyY9KkSVc18pg8dU1OlWeMjsuXTMLGN7cVCCreExuU9649R+Us6aVOlATPCnkRI0KrVnqEI6Byu5FdN2f2kKeHxVF0mnWovbbUPy90ix1gA9AuSe9bODdnZB6IZRUlTOp0c7g+waleqylRlznTYkAAC5JPJev/p/sT+3otpzLvmceelvAAeC47+nuNw9LE1P7h5puc0MpOjuTPeDnftmBB01k6T6zhMbklsNcDAJIE2ssv6QbnJYp8R9+3+YubpcGAX1GuJJcRJJkkyXRJPMwPJW6jhAcLTzurNen8YvDQ0AxcwALganRZUlroP5CwmpYrXa9gT2ySY2NLcwtPd3nW97eB8FmYkWEiJ0PKSD6j0Wn2piTUcDP7WjQN0aARDec3WXiHQDYFLbuQpL0ZxfkdNiRxgjyNiqWIfYW4mdzMWJ4WnxU9V0+/fsKvUbbRXIKuTjYFSpYRc81TqyCDAOmtxa9wdR1Vg2B2gxG9/xCrVmnTU/f3ZWYIBld+KcGvaDAeQXAQAYJI9Tsqk5QSDqCDLQYBg2J0NtvNTVDMydOv8ApVXSrcEAQvCicL8/e3krApyQJAJ3JgearuG0SrEQkGMTDHMhty1xMAvGUECHagXuBrA4JYiuHOLg0MBMhjJyt5CSTHiifSc2Q9jhLQ5o+UQYLXEEXGWYjiLqo4xw9F2KTCqxkkkl7oAJJJJQgyYpyhKRkCQJQ1I2RFA5ZWo6DQBQ5rRA2veRGwvF/snKArDzOhqGJTSmKaVmvI7DotVsFUazOW9zO5gcCC0uZBcAQb/MLi11v/pehDHVDuYHQa+v0XLyuoZVyYMRqWgf/o3+pVfVZax0vJ1Lkzu0cV8SoXbaDoPc+KrShlKVlhhSnBQSnUIaPZ+JgFp6j7hFWrLOpughNUrqELLqq1uxK0gjmuadVWp2VWyse/8AxBPiBb1hQgD6oc50f5O+pXd/oLtxzv8ApnmSBNMnWBct8AJHIHkvM+zCZIW72TXNOq17dWkFV9TgjnxuD/Ah7Zg6ktNyQLnhKoYumSZaCRcnew4xstHs0N+HYB2Zsg6GImR/KyMQ/wA+M2jf1jdfMalOMIplSPLI6rW5M2bvSRlg2ESDPms91PPmu0Q0u7xiY/aI1J4Keu7ifJZuLfw0uq+KPIcuiCpRdlD47pJAM7tgm3/2HmoTXJAadByA3O41uUpI5T71UcmZPFXUhRA6pBkC4I1gzB4GxVOrUmf9eqtYo3PBRYmrLGDIGloIkaukky65EiYtwViHgBmcWyeAO91WcY2kTJ/E6wrNS1zw5aBVahnYequRAI3PEGWiTvJtr52tfgon209+wpKkbcvfJDSplzg1okuIAkiL8XGw8U5cchoGq7MdzYAZjJAFgOFgFEPAK72djG0qjHupseGmS1+YtdDpuARaItyVfF4rO6YiLANgACSd+qJXdUd5K6SSS90BEkkkoQYpiU5QlV8oSBKByMpy5uWMpzTOabRGmWNZ3lZedWGiuUBUjggKw9REaiMoCpQ0IHNWTmxSS3BpjStc4iaDRwA9LLHc0j+IVvDuOUtOov4H36qhmtrldBoWZLMhSVY6HKcFRpwVCEjnQFVLkdZ2yjAUIE0StXtAZKbKI+Z3ed02Hn/4qPsfDAuL3fKwSfsEbiXOLz8zvQbAdAoQHDUQ0c91bwxgyoC6FLgGF7wBxHnsFCHt3ZNZrMJSJu8UqYykGDLRJJHCFlV3yYHrH1U9V2RrW/4tDfIAfZZeIxE28l8fqsn1uSl0ipHltkVZ6zMRUkqziX2VOs9pa0AHNeZMgjaBtv6IsUaIxp0BB4j7KKqIO6lzkgToJgbCeSjxJi4BMRceUn0Tl2AyniHXPv0UDtBumrG6VJ8cPFW0qQtlWrw99FWdxCt4m50v70VUt9/VWIdHCLaY98FG48/eysupHLIFs2tuRVdzE2LQSIzx4ckwqEaC2u35T3uAYnXhbRDJ4H0KYGAkkkvcgBJJJKEGKZ0JyhKr5AkMU2VPKaVTntfYQBYo3BTEoFm6jDCXEQ0yEhASrv8AbkzEGPOINxvEKsQsnU6ScGHGSZDKlpYjK6YBsRB0uI8xqOYCB7UqOGe/NkY52Vpc7KCYaNXGNAJ1WRk+sjcBirstuZIluihIQYao5skCWiM3C+i0KL2VNDf/ABOv8rOlGgykkSrlTC8lC6ihIVoUlGkXEACSVM3DE30G5NgPFEzGsYCGamxdy4N4ddeihC7UeGt+E3jLjxPDoPeiruqAdVTOL2FkqTS4qELDJcYH+l236M7KuKrh3W/LzcN/D6+KyP072P8AEN7Mae8eJ4A8eey7hlQNaGtEACABawWT9JazZH6qHb7+H9i5y8FnF4mRtqb3VBjgTcwJ14IMRjCQGknKCSBsJiY6wPJQCrBFp6zCw443QptLom7ZDGvcKbi9oNnREjjErLdc8FO6TMcJ8uqqHpxVqCFMt1qMOgkOiwiCCInUdVRr/LaeDuA/x+6IAkGNrngBpf081Qrv1/nb2U3HBnG0RVD/ALTsfBtrKhL4O4N0LTpf3ore0AmxF77k6KKnT0kgT4xrsOhRm2uo96qrmgyRInnHv8oop1Rw7LB9n4M4Ko91U/FBblaG2PzC500OttAuPxRY1zoBOovaDxEImYpwzAbjToQeKq1qkx9uc358JUxY2nyF27GewjKXCxEjScskE+YKga7p4qaq0ZWuzy4ky2D3QIgzoQZ0HBQ5uttLbKzHoOgUkk4C9yAGSSSXSDFCURQlVsrCQJQlEUBWbmkGh2tJnkJPmB46hAkUJKzpzSDoKUKYlC4wqmTOvISRaw2GFR2XMG2OsmXAEgaWkgCdBKrPBaSASNjfbgUMqTEMyvMhvGGukAG8AydOZJ4qpllGa4R1cFV6djwA4FoJIgGSMpzAyIN7Ai/+XGERQOasbNid2hiZPh8e9tsxjnDo6ZlO7GVdQ5p6MZ/6qo2nJ7o1gX+63ewuz3F2W4mxsdOYF4VdwaOTmoqzBrVXu+cl3U/Tgga3ku3xPZmGploqUw5wJkBxaHDYgs0VN2Ew2Y5aVpsM7zA87pE8sYcMCOaLOco0CSLLpOzOxTE1O6OA+Y+V2/X6o6eKaz5GhuoJAgxopBjuCq5dRNqoKviSWT0dBTrta0NaIAsANAEbarnENAJJIAG5nSOshYdOuStrs2g+vUY2Zc4tbLjwhoEk6AAeSyJ49vLFW2+AASTG+iN5U9bCGm94MEtcQSDIkGDBkyoX1ARbbfltbzSm+QOGrRXeYGvu6rOqb/gaKWS92VoJJsGtEmdgAPsq7DfSTNrSnxQLCq1hlj35cNFnvd5K1i6xJOYxx/laGCw+GOHqufUIqty5Ghsg3gkmdk2L2K6OJWc8SfH7JNuQJAm0mY21jaLo6gBIa25JA21mBHAaeqgqNgxmvN42O4lWVycJw+B13AG2u3PZRnBVHMdWDD8Nrg0u2DnAkDxg+SB1Xuge72UBxBgibTPl+JRRi/B1IBrxN5PHQW1jl5IS2BPpI/2E0/zv5pq1rHgD53T0g0izRoElwaA8tBcby3KBcyDeJm24VRjQd04eRoYB15iZgxtYIXk26KJMIJ8WjxTFJJe4i27GSSSXTgxQlMkquYJDSgKSSy8oaBKApJLKzjEAShlMksXLNjEMSkHJJKp9Y7CoaU8nRJJRNtkNTCQ1rTUd3RoB9xutJ3btNtMZDeTIi+xzF0XbynY6JJJeeTi6QhYlk5kYtTtAuJJMykzHGbzHAapJKk4JjtiXRZ7Ow9WuXfDaXZWF7o2a35nHkJVmjBDYN75r6XjhwhOkq2Ttr0In3Xz5/gu4d3NamDqlunuEklQzIUXq2JBGt54fdVMXiiQBM2gfj1TJJGPGiSZBQxLmEPaSCIIOtxcaKXFYokmo6A52mUZbiJPj9Ukk3YnJA26M2vUJN9fruidTe1ocWPDXzlcQYMa5ToUkkcpbdq9/wRLhv1/NFF+shCCCQCbeZjdJJWkRCxdLKYDmus10sMxmAMX/AHCYPAqNpgF03EQJvOsxBkW+iSSJLwEiOtqYM3mYjrbZPXq5yCQ1sAN7ogWETbUnc7lJJFQRCR+PVXaeMrUxkzOblkZYAIvJBEaySkkhlTai18f0Ovo//9k=",
              alt: "Laptop",
            },
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KJNKmMwJwzupgI7QHHjtl72n008UG3dzYw&s",
              alt: "Headphones",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-400 shadow-md p-4 rounded-lg transform-gpu rotate-[-20deg] transition duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
