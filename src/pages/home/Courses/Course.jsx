import styles from "./Courses.module.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// React
import { useRef, useEffect } from "react";

// Animation
import { revealGrid, alertColorAnimation } from "./CourseAnimation";

import Button from "../../../components/button/Button";

// Localization
import "../../../localization/i18n";
import { useTranslation } from "react-i18next";

export default function Course({ course, index, onClick }) {
  // Localization
  const { t, i18n } = useTranslation();

  const gridRef = useRef(null);
  const alertIconBgRef = useRef(null);

  // Animation
  useEffect(() => {
    const context = gsap.context(() => {
      const gridTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%", // Adjust trigger position
          end: "bottom 20%",
          scrub: false, // Smooth scrolling effect; set to true if needed
        },
      });

      // Stagger animation for grid items
      gridTimeline.add(revealGrid(gridRef.current, index));

      //   Alert Color Animation
      alertIconBgRef.current && alertColorAnimation(alertIconBgRef.current);
    }, gridRef);

    return () => context.revert();
  }, []);
  return (
    <div
      ref={gridRef}
      onClick={onClick}
      className={`grid-item item-${index + 1}`}
    >
      <div className={`${styles.classCard} ${styles[`card-${index + 1}`]}`}>
        <div className={`${styles.content}`}>
          <h3>{t(`home.courses.courseDetails.${course.courseKey}.title`)}</h3>
          <p>
            {t(
              `home.courses.courseDetails.${course.courseKey}.shortDescription`
            )}
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button>{t("home.courses.button")}</Button>
        </div>
        <div className={styles.illustration}>
          <img src={course.illustration} alt="Illustration" />
        </div>
      </div>
      {course.title === "Art and Extracarriculars" && (
        <div className={styles.alertIcon}>
          {/* Alert Icon */}
          <svg
            className={styles.alertIcon}
            width="156"
            height="156"
            viewBox="0 0 156 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Alert Icon">
              <circle id="Bg" cx="78" cy="78" r="74.75" fill="white" />
              <path
                ref={alertIconBgRef}
                id="Dynamic Background"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.8492 17.895C76.8102 16.2498 79.1875 16.2498 80.149 17.895L85.946 27.8189L94.5274 20.1716C95.9498 18.904 98.211 19.6387 98.6164 21.5003L101.064 32.731L111.588 28.1099C113.332 27.3439 115.255 28.7413 115.066 30.637L113.923 42.0748L125.361 40.9311C127.256 40.7414 128.654 42.6648 127.888 44.4094L123.267 54.9347L134.497 57.381C136.359 57.7865 137.094 60.048 135.826 61.4705L128.179 70.0506L138.103 75.8497C139.748 76.8107 139.748 79.188 138.103 80.1491L128.179 85.9465L135.826 94.5274C137.094 95.9495 136.359 98.2106 134.498 98.6165L123.267 101.064L127.888 111.588C128.654 113.333 127.256 115.256 125.361 115.066L113.923 113.924L115.066 125.361C115.255 127.257 113.332 128.654 111.588 127.888L101.064 123.265L98.6164 134.497C98.211 136.358 95.9498 137.093 94.5274 135.825L85.946 128.178L80.149 138.103C79.1879 139.748 76.8102 139.748 75.8492 138.103L70.0518 128.178L61.4712 135.825C60.0487 137.093 57.7877 136.358 57.382 134.497L54.9342 123.265L44.4105 127.888C42.666 128.654 40.7425 127.257 40.9319 125.361L42.0744 113.924L30.6377 115.066C28.7417 115.256 27.3443 113.332 28.1105 111.588L32.7322 101.064L21.5015 98.6165C19.6399 98.2106 18.9053 95.9499 20.1729 94.5274L27.8201 85.9465L17.8951 80.1491C16.2499 79.188 16.2498 76.8107 17.8949 75.8497L27.8201 70.0506L20.1733 61.4701C18.9056 60.0476 19.6403 57.7866 21.5021 57.381L32.7322 54.9347L28.1104 44.4096C27.3443 42.665 28.7418 40.7415 30.6378 40.9311L42.0744 42.0748L40.9318 30.637C40.7424 28.7413 42.6658 27.3439 44.4102 28.1099L54.9342 32.731L57.3819 21.5002C57.7877 19.6386 60.0487 18.904 61.4712 20.1717L70.0518 27.8189L75.8492 17.895Z"
                fill="black"
              />
              <path
                id="Outer Ring"
                d="M156 78C156 121.078 121.078 156 78 156C34.9218 156 0 121.078 0 78C0 34.9218 34.9218 0 78 0C121.078 0 156 34.9218 156 78ZM8.67709 78C8.67709 116.286 39.714 147.323 78 147.323C116.286 147.323 147.323 116.286 147.323 78C147.323 39.714 116.286 8.67709 78 8.67709C39.714 8.67709 8.67709 39.714 8.67709 78Z"
                fill="black"
              />
              <path
                id="Free to join"
                d="M51.5822 59.2534C51.2442 59.8387 50.7826 59.9624 50.1973 59.6245L48.8804 58.8642C48.2951 58.5263 48.1714 58.0647 48.5094 57.4794L56.2393 44.0908C56.5772 43.5055 57.0388 43.3818 57.6241 43.7197L65.4158 48.2183C66.0011 48.5562 66.1248 49.0178 65.7869 49.6031L65.0139 50.9419C64.6844 51.5126 64.2344 51.6332 63.6637 51.3037L58.0449 48.0597L56.0934 51.4398L60.7904 54.1516C61.3757 54.4895 61.4994 54.9511 61.1614 55.5364L60.3884 56.8753C60.059 57.4459 59.6089 57.5665 59.0382 57.237L54.3193 54.5126L51.5822 59.2534ZM62.052 64.7129C61.714 65.2982 61.2524 65.4219 60.6671 65.084L59.3502 64.3236C58.7649 63.9857 58.6412 63.5241 58.9792 62.9388L64.935 52.623C65.2729 52.0377 65.7345 51.914 66.3198 52.2519L67.6367 53.0123C68.222 53.3502 68.3457 53.8118 68.0078 54.3971L66.956 56.2188C67.6682 55.8301 68.3733 55.6226 69.0713 55.5964C69.7839 55.5786 70.3963 55.7175 70.9084 56.0132C71.1571 56.1568 71.3744 56.3213 71.5601 56.5065C71.7688 56.6856 71.921 56.8612 72.0167 57.0335C72.1185 57.2289 72.1041 57.4059 71.9734 57.5646L70.2967 59.962C70.1891 60.1145 70.0672 60.1904 69.931 60.1898C69.8094 60.1976 69.6662 60.1247 69.5013 59.971C69.2363 59.7204 68.9982 59.5245 68.7872 59.3831C68.5846 59.2271 68.3882 59.0942 68.198 58.9844C67.5981 58.638 66.9623 58.5734 66.2907 58.7904C65.6191 59.0075 65.0257 59.5623 64.5103 60.4549L62.052 64.7129ZM72.1605 72.0708C71.0045 71.4034 70.1343 70.5791 69.5498 69.5978C68.9652 68.6165 68.6808 67.5548 68.6963 66.4127C68.735 65.2644 69.0795 64.1269 69.73 63.0002C70.3383 61.9467 71.0965 61.1066 72.0046 60.4798C72.9212 59.8384 73.9371 59.4982 75.0521 59.4591C76.1757 59.4055 77.3447 59.7292 78.5592 60.4304C79.5103 60.9795 80.2187 61.6617 80.6846 62.4769C81.1734 63.2859 81.4 64.1776 81.3642 65.152C81.3369 66.1117 81.0276 67.1037 80.4362 68.1279C80.1828 68.5669 79.9457 68.8592 79.725 69.005C79.5189 69.1591 79.213 69.1483 78.8072 68.9726L72.2781 66.1394C72.2188 66.749 72.3418 67.3469 72.6473 67.9329C72.9528 68.519 73.4786 69.0274 74.2249 69.4583C74.6492 69.7033 75.14 69.8501 75.6972 69.8987C76.2691 69.9557 76.7971 69.9874 77.2812 69.9937C77.5013 69.9842 77.6591 70.0656 77.7548 70.2379C77.8735 70.404 77.9103 70.6106 77.8652 70.8577L77.6452 72.2524C77.6001 72.4995 77.5468 72.6931 77.4854 72.8333C77.4387 72.9819 77.2853 73.0786 77.0252 73.1236C76.2388 73.2353 75.4049 73.1929 74.5235 72.9961C73.6505 72.7848 72.8628 72.4763 72.1605 72.0708ZM76.6923 63.157C76.1217 62.8275 75.5732 62.6962 75.0469 62.763C74.529 62.8152 74.0184 63.1252 73.5149 63.693L77.7318 65.513C77.8575 65.0588 77.8269 64.6217 77.6402 64.2017C77.4765 63.7756 77.1606 63.4273 76.6923 63.157ZM83.2205 78.4563C82.0645 77.7889 81.1943 76.9646 80.6098 75.9833C80.0253 75.002 79.7408 73.9403 79.7563 72.7982C79.795 71.6499 80.1395 70.5124 80.79 69.3857C81.3983 68.3322 82.1565 67.4921 83.0646 66.8653C83.9812 66.2239 84.9971 65.8837 86.1122 65.8446C87.2357 65.791 88.4047 66.1147 89.6192 66.8159C90.5703 67.365 91.2788 68.0472 91.7446 68.8624C92.2335 69.6714 92.46 70.5631 92.4242 71.5375C92.3969 72.4972 92.0876 73.4892 91.4962 74.5134C91.2428 74.9524 91.0057 75.2447 90.785 75.3905C90.5789 75.5446 90.273 75.5338 89.8672 75.3581L83.3381 72.5249C83.2788 73.1345 83.4019 73.7324 83.7073 74.3184C84.0128 74.9045 84.5386 75.4129 85.2849 75.8438C85.7092 76.0888 86.2 76.2356 86.7573 76.2842C87.3291 76.3412 87.8571 76.3729 88.3412 76.3792C88.5613 76.3697 88.7191 76.4511 88.8148 76.6234C88.9335 76.7895 88.9703 76.9961 88.9252 77.2432L88.7052 78.6379C88.6601 78.885 88.6069 79.0786 88.5455 79.2188C88.4987 79.3674 88.3453 79.4641 88.0852 79.5091C87.2988 79.6208 86.4649 79.5784 85.5835 79.3816C84.7105 79.1703 83.9229 78.8618 83.2205 78.4563ZM87.7523 69.5425C87.1817 69.213 86.6332 69.0817 86.1069 69.1485C85.589 69.2007 85.0784 69.5107 84.575 70.0785L88.7918 71.8985C88.9175 71.4443 88.8869 71.0072 88.7002 70.5872C88.5365 70.1611 88.2206 69.8128 87.7523 69.5425ZM102.7 88.4151C101.983 88.5084 101.221 88.4589 100.415 88.2667C99.6239 88.0829 98.899 87.8009 98.2405 87.4208C97.0407 86.728 96.3269 85.8185 96.0993 84.6921C95.8717 83.5657 96.1845 82.2635 97.0378 80.7856L98.6851 77.9323L97.4501 77.1315C97.2245 76.9817 97.1015 76.8229 97.0813 76.6552C97.0611 76.4874 97.1101 76.3011 97.2284 76.0963L98.2422 74.3404C98.3604 74.1356 98.5277 73.998 98.7438 73.9277C98.9831 73.8512 99.2082 73.8836 99.4193 74.025L100.523 74.7498L101.967 72.2477C102.221 71.8087 102.567 71.7159 103.006 71.9694L104.762 72.9831C105.201 73.2366 105.293 73.5828 105.04 74.0217L103.494 76.6995L106.541 78.7218C106.781 78.88 106.904 79.0388 106.909 79.1981C106.93 79.3658 106.881 79.5521 106.762 79.757L105.749 81.5129C105.63 81.7177 105.451 81.8584 105.212 81.9349C104.996 82.0052 104.782 81.9696 104.571 81.8283L101.644 79.9039L100.427 82.011C100.022 82.7134 99.8706 83.2796 99.9734 83.7097C100.099 84.1336 100.389 84.4764 100.843 84.7383C101.135 84.9073 101.466 85.0104 101.835 85.0477C102.227 85.0788 102.582 85.0887 102.9 85.0776C103.12 85.0681 103.278 85.1495 103.374 85.3217C103.478 85.4794 103.515 85.686 103.484 85.9415L103.32 87.544C103.298 87.7849 103.252 87.9827 103.182 88.1375C103.127 88.3007 102.966 88.3933 102.7 88.4151ZM108.571 93.0927C107.43 92.4337 106.586 91.6148 106.039 90.6357C105.515 89.6505 105.283 88.5995 105.343 87.4828C105.402 86.366 105.749 85.2589 106.382 84.1615C107.016 83.0641 107.801 82.2104 108.739 81.6006C109.685 80.976 110.711 80.6516 111.818 80.6272C112.939 80.6112 114.07 80.9327 115.212 81.5916C116.353 82.2506 117.19 83.0654 117.722 84.0359C118.254 85.0065 118.486 86.0575 118.418 87.1889C118.373 88.3141 118.034 89.4254 117.401 90.5228C116.767 91.6203 115.974 92.4697 115.022 93.0711C114.085 93.681 113.058 94.0054 111.943 94.0445C110.837 94.0689 109.713 93.7516 108.571 93.0927ZM110.409 89.9101C111.082 90.2988 111.762 90.438 112.45 90.3279C113.161 90.2116 113.787 89.6852 114.328 88.7488C114.868 87.8123 115.007 87.0144 114.744 86.3552C114.504 85.6898 114.047 85.1628 113.374 84.7742C112.701 84.3856 112.009 84.2494 111.298 84.3657C110.61 84.4758 109.996 84.9991 109.455 85.9356C108.915 86.872 108.764 87.673 109.004 88.3384C109.268 88.9976 109.736 89.5215 110.409 89.9101ZM60.9806 77.4967C60.4831 77.2095 60.1497 76.7731 59.9805 76.1877C59.8343 75.596 59.9091 75.0442 60.2048 74.532C60.5005 74.0199 60.9368 73.6865 61.5138 73.5319C62.1055 73.3857 62.65 73.4563 63.1475 73.7435C63.6597 74.0392 63.993 74.4755 64.1476 75.0526C64.3023 75.6296 64.2317 76.1741 63.936 76.6863C63.6404 77.1984 63.1998 77.5391 62.6143 77.7083C62.0373 77.8629 61.4928 77.7924 60.9806 77.4967ZM48.5887 92.32C48.3692 92.1933 48.1227 92.012 47.8492 91.7761C47.5527 91.5463 47.2969 91.3304 47.0819 91.1282C46.8169 90.8776 46.6827 90.6539 46.6794 90.4568C46.6615 90.2514 46.7797 90.0465 47.0342 89.8423L48.5865 88.5729C48.7864 88.3957 48.9587 88.3 49.1033 88.286C49.248 88.272 49.407 88.3345 49.5803 88.4736C49.739 88.6042 49.8904 88.7307 50.0344 88.8528C50.1785 88.975 50.3164 89.0741 50.4481 89.1502C50.887 89.4036 51.3008 89.4474 51.6892 89.2814C52.0776 89.1155 52.5169 88.6082 53.0068 87.7595L58.1897 78.7826C58.4431 78.3436 58.7893 78.2508 59.2283 78.5043L60.9842 79.518C61.4232 79.7715 61.5159 80.1177 61.2625 80.5567L55.7755 90.0604C54.9223 91.5383 53.8879 92.5019 52.6725 92.9512C51.4717 93.409 50.1105 93.1986 48.5887 92.32ZM62.609 94.2691C61.4677 93.6102 60.6236 92.7912 60.0768 91.8121C59.5531 90.8269 59.321 89.7759 59.3804 88.6592C59.4399 87.5424 59.7864 86.4353 60.42 85.3379C61.0536 84.2405 61.8391 83.3868 62.7765 82.777C63.7224 82.1525 64.7486 81.828 65.8553 81.8036C66.9765 81.7876 68.1078 82.1091 69.2492 82.7681C70.3905 83.427 71.2272 84.2418 71.7594 85.2124C72.2916 86.183 72.5237 87.2339 72.4558 88.3653C72.411 89.4905 72.0718 90.6018 71.4382 91.6993C70.8046 92.7967 70.0118 93.6461 69.0597 94.2475C68.1223 94.8574 67.0961 95.1819 65.981 95.2209C64.8743 95.2453 63.7504 94.9281 62.609 94.2691ZM64.4465 91.0866C65.1196 91.4752 65.8001 91.6144 66.4879 91.5043C67.1989 91.388 67.8247 90.8617 68.3654 89.9252C68.9061 88.9887 69.0448 88.1909 68.7816 87.5316C68.5414 86.8662 68.0848 86.3392 67.4117 85.9506C66.7386 85.562 66.0466 85.4258 65.3356 85.5421C64.6478 85.6522 64.0335 86.1755 63.4928 87.112C62.9521 88.0485 62.8019 88.8494 63.042 89.5148C63.3052 90.174 63.7734 90.698 64.4465 91.0866ZM78.2109 86.8593C77.7134 86.5721 77.38 86.1358 77.2108 85.5503C77.0646 84.9587 77.1394 84.4068 77.4351 83.8946C77.7308 83.3825 78.1671 83.0491 78.7441 82.8945C79.3358 82.7484 79.8803 82.8189 80.3778 83.1061C80.89 83.4018 81.2233 83.8382 81.3779 84.4152C81.5326 84.9922 81.462 85.5368 81.1663 86.0489C80.8707 86.561 80.4301 86.9017 79.8446 87.071C79.2676 87.2256 78.7231 87.155 78.2109 86.8593ZM73.2973 98.9182C72.9593 99.5035 72.4977 99.6272 71.9124 99.2893L70.5955 98.5289C70.0102 98.191 69.8866 97.7294 70.2245 97.1441L75.2933 88.3647C75.6312 87.7794 76.0928 87.6557 76.6781 87.9936L77.995 88.754C78.5803 89.0919 78.704 89.5535 78.3661 90.1388L73.2973 98.9182ZM78.1023 102.278C77.7644 102.863 77.3028 102.987 76.7175 102.649L75.4005 101.888C74.8153 101.55 74.6916 101.089 75.0295 100.504L81.112 89.9683C81.45 89.383 81.9116 89.2593 82.4969 89.5972L83.8138 90.3575C84.3991 90.6955 84.5228 91.1571 84.1848 91.7424L83.2344 93.3885C84.0305 92.9897 84.8318 92.8182 85.6384 92.8742C86.4535 92.9156 87.1683 93.1137 87.7828 93.4685C88.851 94.0852 89.5251 94.9621 89.805 96.0992C90.0934 97.2217 89.7772 98.5804 88.8564 100.175L85.511 105.97C85.173 106.555 84.7114 106.679 84.1261 106.341L82.8092 105.581C82.2239 105.243 82.1002 104.781 82.4382 104.196L85.2133 99.389C85.678 98.5842 85.8665 97.9029 85.7788 97.345C85.7143 96.781 85.4186 96.3469 84.8919 96.0428C84.409 95.764 83.9255 95.6214 83.4414 95.6151C82.972 95.6172 82.5081 95.7786 82.0498 96.0993C81.6146 96.4138 81.2027 96.9076 80.8141 97.5807L78.1023 102.278Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
