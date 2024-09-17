interface IIconProps {
  size?: number;
  fill?: string;
}

export const HeartIcon = ({ size = 16, fill = '#eb8291' }: IIconProps) => {
  return (
    <svg width={size} height={size} version="1.1" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="   M27,16.4c-1.5-4.8-6.1-8.2-11.5-8.2c-6.6,0-12,5.2-12,11.5c0,4.1,2,6.3,5.7,9.8l18.1,18.1"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="   M27,16.4c1.1-5.4,6.7-9.1,12.5-9.1c6.6,0,12,5.2,12,11.5c0,3.5-1.6,5.7-4.2,8.8L28.1,46.8"
          fill="none"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </g>
    </svg>
  );
};

export const ParentIcon = ({ size = 16, fill = '#947463' }: IIconProps) => {
  return (
    <svg width={size} height={size} fill={fill} version="1.1" viewBox="0 0 48 62" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="23" cy="17" r="1" />
        <circle cx="31" cy="17" r="1" />
        <path d="M28.447,22.105l-1.134-0.567C27.764,20.417,28,19.208,28,18h-2c0,1.154-0.273,2.31-0.789,3.342l-0.553,1.105l2.895,1.447   L28.447,22.105z" />
        <path d="M29,24.764C28.619,25.526,27.853,26,27,26s-1.619-0.474-2-1.236l-0.105-0.211l-1.789,0.895l0.105,0.211   C23.933,27.103,25.385,28,27,28s3.067-0.897,3.789-2.342l0.105-0.211l-1.789-0.895L29,24.764z" />
        <path d="M37.488,33.803L32,33.117v-1.425c3.208-1.34,5.436-4.277,5.901-7.692H38c2.206,0,4-1.794,4-4   c0-0.617-0.152-1.195-0.403-1.718l1.415-2.359C43.658,14.847,44,13.614,44,12.357c0-2.42-1.289-4.697-3.364-5.942l-0.752-0.451   c-0.755-0.453-1.394-1.092-1.847-1.848C36.513,1.577,33.727,0,30.766,0C29.466,0,28.165,0.305,27,0.882   C25.835,0.305,24.534,0,23.234,0c-2.961,0-5.747,1.577-7.271,4.117c-0.453,0.755-1.092,1.394-1.848,1.847l-0.752,0.451   C11.289,7.66,10,9.937,10,12.357c0,1.256,0.342,2.489,0.988,3.565l0.057,0.094C6.028,16.199,2,20.326,2,25.385   c0,0.773,0.104,1.534,0.29,2.277C0.936,28.081,0,29.322,0,30.754C0,32.544,1.456,34,3.246,34h0.389   c0.349,0,0.694-0.056,1.026-0.167l0.228-0.076c0.423,0.648,0.905,1.25,1.442,1.801L5.1,37.2C4.391,38.146,4,39.318,4,40.5   c0,2.198,1.299,4.093,3.167,4.973l0.905,7.695C8.664,58.203,12.934,62,18.003,62H41v-0.032c3.912-0.319,7-3.599,7-7.592V45.71   C48,39.671,43.481,34.552,37.488,33.803z M46,45.71V48h-6v-3.586c0-1.179-0.459-2.288-1.293-3.121l-1.414,1.414   C37.742,43.156,38,43.779,38,44.414v3.413l-8.444-6.192l-0.145-0.387c2.411-1.13,4.301-3.223,5.15-5.769l0.008-0.025l2.671,0.334   C42.234,36.412,46,40.678,46,45.71z M32.523,35.198c-0.711,1.827-2.094,3.333-3.847,4.188c-0.258-0.545-0.57-1.055-0.922-1.533   c1.402-0.317,2.647-1.153,3.464-2.379l0.27-0.406L32.523,35.198z M30.684,30.051L30,30.279v3.418l-0.445,0.668   c-0.801,1.201-2.284,1.817-3.688,1.571c-0.855-0.651-1.816-1.161-2.848-1.491C23.648,33.415,24,32.223,24,31v-0.721l-0.684-0.228   C20.136,28.991,18,26.027,18,22.675V15.82l0.132-0.026c2.877-0.576,5.246-2.546,6.335-5.27c0.21-0.525,0.963-0.679,1.362-0.28   l1.17,1.17l1.17-1.17c0.399-0.399,1.153-0.244,1.362,0.279c1.089,2.725,3.458,4.695,6.336,5.271L36,15.82v6.855   C36,26.027,33.864,28.991,30.684,30.051z M14,20c0-1.103,0.897-2,2-2v4C14.897,22,14,21.103,14,20z M38,22v-4c1.103,0,2,0.897,2,2   S39.103,22,38,22z M14.394,8.13l0.751-0.451c1.036-0.621,1.913-1.498,2.534-2.533C18.843,3.205,20.972,2,23.234,2   c1,0,2.002,0.236,2.897,0.684L27,3.118l0.868-0.434C28.763,2.236,29.766,2,30.766,2c2.263,0,4.392,1.205,5.556,3.145   c0.621,1.036,1.498,1.913,2.533,2.534l0.752,0.451C41.083,9.016,42,10.636,42,12.357c0,0.894-0.243,1.771-0.703,2.536l-1.071,1.786   C39.589,16.251,38.823,16,38,16v-1v-0.764c0-1.617-0.382-3.236-1.105-4.683l-1.789,0.895c0.516,1.032,0.817,2.172,0.882,3.325   c-2.089-0.509-3.795-1.984-4.598-3.992C30.957,8.699,29.924,8,28.759,8C28.112,8,27.499,8.215,27,8.612   C26.501,8.215,25.888,8,25.241,8c-1.165,0-2.197,0.699-2.63,1.781c-0.803,2.007-2.509,3.482-4.598,3.991   c0.064-1.152,0.366-2.293,0.882-3.325l-1.789-0.895C16.382,11,16,12.619,16,14.236V15v1c-0.823,0-1.589,0.251-2.226,0.679   l-1.071-1.786C12.243,14.128,12,13.251,12,12.357C12,10.636,12.917,9.016,14.394,8.13z M3.635,32H3.246C2.559,32,2,31.441,2,30.754   c0-0.572,0.387-1.068,0.941-1.208l0.871,2.178c0.032,0.079,0.075,0.152,0.108,0.23C3.826,31.976,3.732,32,3.635,32z M5.669,30.981   l-1.141-2.853C4.178,27.251,4,26.329,4,25.385c0-1.432,0.416-2.766,1.125-3.899l0.981,1.961l1.789-0.895l-1.361-2.722   c0.4-0.35,0.835-0.662,1.304-0.92l1.268,2.536l1.789-0.895l-1.178-2.356C10.254,18.073,10.811,18,11.385,18h0.849l0.169,0.282   C12.152,18.805,12,19.383,12,20c0,2.206,1.794,4,4,4h0.099c0.462,3.398,2.67,6.321,5.852,7.671   c-0.13,0.873-0.523,1.689-1.106,2.355C20.623,34.01,20.401,34,20.177,34c-0.874,0-1.743,0.122-2.583,0.362l-2.402,0.686   c-1.213,0.347-2.346,0.903-3.354,1.631C9.05,35.8,6.76,33.708,5.669,30.981z M6,40.5c0-0.752,0.249-1.498,0.7-2.1l1.143-1.523   c0.717,0.522,1.494,0.962,2.316,1.313c-0.357,0.394-0.693,0.809-0.99,1.256l1.664,1.109c1.158-1.737,2.902-3.01,4.909-3.584   l2.402-0.686C18.805,36.096,19.489,36,20.177,36c2.863,0,5.461,1.692,6.673,4.251C26.276,40.097,25.684,40,25.076,40   C22.277,40,20,42.277,20,45.076c0,1.522,0.674,2.951,1.849,3.919l3.137,2.583l-6.17-0.514l-1.518-6.833   c0.581-0.478,1.105-1.033,1.534-1.677l-1.664-1.109C16.102,43.045,14.317,44,12.395,44H9.5C7.57,44,6,42.43,6,40.5z M9.5,46h2.895   c1.088,0,2.137-0.239,3.101-0.661l0.668,3.008l-6.493,1.299l-0.43-3.659C9.327,45.991,9.413,46,9.5,46z M10.058,52.935   l-0.153-1.297l6.692-1.339l0.307,1.381l-1.612,1.612l1.414,1.414l1.672-1.672l9.319,0.776L35.213,60H18.003   C13.948,60,10.532,56.963,10.058,52.935z M40.376,60c-1.301,0-2.571-0.456-3.575-1.283L23.121,47.451   C22.409,46.865,22,45.999,22,45.076C22,43.38,23.38,42,25.076,42c1.044,0,2.042,0.327,2.884,0.944l13.449,9.862l1.183-1.613   L40.964,50H46v4.376C46,57.477,43.477,60,40.376,60z" />
        <path d="M10.789,28.658l0.105-0.211l-1.789-0.895L9,27.764C8.619,28.526,7.853,29,7,29v2C8.615,31,10.067,30.103,10.789,28.658z" />
        <path d="M15.789,25.658l0.105-0.211l-1.789-0.895L14,24.764C13.619,25.526,12.853,26,12,26v2   C13.615,28,15.067,27.103,15.789,25.658z" />
        <path d="M16.897,30.47l0.051-0.154l-1.897-0.633L15,29.838C14.569,31.131,13.363,32,12,32v2C14.226,34,16.194,32.582,16.897,30.47z   " />
      </g>
    </svg>
  );
};

export const FriendsIcon = ({ size = 16, fill = '#7bb3ff' }: IIconProps) => {
  return (
    <svg width={size} height={size} fill={fill} version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="20" cy="30" r="1" />
        <circle cx="26" cy="30" r="1" />
        <path d="M20.895,33.553l-1.789,0.895l0.105,0.21C19.933,36.103,21.385,37,23,37s3.067-0.897,3.789-2.342l0.105-0.211l-1.789-0.895   L25,33.764C24.619,34.526,23.853,35,23,35s-1.619-0.474-2-1.236L20.895,33.553z" />
        <circle cx="46" cy="38" r="1" />
        <circle cx="52" cy="38" r="1" />
        <circle cx="38" cy="12" r="1" />
        <circle cx="44" cy="12" r="1" />
        <path d="M37,17.382c0,0.559,0.132,1.118,0.382,1.618c0.616,1.234,1.856,2,3.236,2h0.764c1.38,0,2.62-0.767,3.236-2   C44.868,18.5,45,17.941,45,17.382V15h-8V17.382z M39,17h4v0.382c0,0.25-0.059,0.5-0.171,0.724C42.554,18.657,41.999,19,41.382,19   h-0.764c-0.617,0-1.172-0.343-1.447-0.895C39.059,17.882,39,17.632,39,17.382V17z" />
        <path d="M45,43.382c0,0.559,0.132,1.118,0.382,1.618c0.616,1.234,1.856,2,3.236,2h0.764c1.38,0,2.62-0.767,3.236-2   C52.868,44.5,53,43.941,53,43.382V41h-8V43.382z M47,43h4v0.382c0,0.25-0.059,0.5-0.171,0.724C50.554,44.657,49.999,45,49.382,45   h-0.764c-0.617,0-1.172-0.343-1.447-0.895C47.059,43.882,47,43.632,47,43.382V43z" />
        <path d="M55,58.414V62h2v-3.586c0-0.645,0.251-1.251,0.707-1.707l-1.414-1.415C55.459,56.126,55,57.234,55,58.414z" />
        <path d="M40.293,56.708C40.749,57.163,41,57.769,41,58.414V62h2v-3.586c0-1.18-0.459-2.288-1.293-3.122L40.293,56.708z" />
        <path d="M29,51.414V62h2V51.414c0-0.645,0.251-1.251,0.707-1.707l-1.414-1.415C29.459,49.126,29,50.234,29,51.414z" />
        <path d="M63,24.597V15c0-2.206-1.794-4-4-4s-4,1.794-4,4v6.395c0,1.448-0.306,2.883-0.865,4.216   C53.771,25.458,53.39,25.34,53,25.243V13c0-6.617-5.383-12-12-12S29,6.383,29,13v3.31C27.82,15.491,26.403,15,24.883,15   c-1.43,0-2.814,0.419-4.005,1.212L19.697,17H19c-2.51,0-4.594,1.859-4.947,4.272C12.214,22.022,11,23.809,11,25.817   c0,0.972,0.285,1.914,0.824,2.722l0.609,0.914C11.577,29.982,11,30.921,11,32c0,1.654,1.346,3,3,3h1.263   c0.512,1.979,1.759,3.661,3.438,4.736l-0.193,0.58C18.371,40.725,17.989,41,17.559,41c-3.406,0-6.585,1.662-8.559,4.387V39   c0-2.206-1.794-4-4-4s-4,1.794-4,4v9.929C1,53.379,4.621,57,9.071,57c2.155,0,4.183-0.84,5.707-2.364L15,54.414V62h2V51.414   c0-1.18-0.459-2.288-1.293-3.122l-1.414,1.415C14.749,50.163,15,50.769,15,51.414v0.172l-1.636,1.636   C12.218,54.369,10.692,55,9.071,55C5.724,55,3,52.276,3,48.929V43h4v8h2v-1.735l1.11-1.943c1.519-2.658,4.36-4.311,7.421-4.32   l1.884,6.59L23,47.202l3.585,2.39l1.784-6.242C32.295,44.445,35,47.965,35,52.087v8.689V62h2v-1.224   c0-3.922,2.94-7.208,6.839-7.641c0.246-0.027,0.482-0.091,0.708-0.175l0.332,0.333C45.964,54.378,47.466,55,49,55   s3.036-0.622,4.121-1.707l0.333-0.333c0.226,0.084,0.462,0.147,0.708,0.175C58.06,53.568,61,56.854,61,60.776V62h2v-1.224   c0-4.943-3.705-9.083-8.618-9.629c-0.386-0.042-0.715-0.308-0.838-0.677l-0.245-0.734C55.521,48.313,57,45.828,57,43h1   c1.654,0,3-1.346,3-3s-1.346-3-3-3h-0.161c0.427-0.703,0.735-1.461,0.924-2.252C61.454,32.074,63,28.396,63,24.597z M3,41v-2   c0-1.103,0.897-2,2-2s2,0.897,2,2v2H3z M59,13c1.103,0,2,0.897,2,2v2h-4v-2C57,13.897,57.897,13,59,13z M57,21.395V19h4v5.597   c0,2.472-0.762,4.886-2.132,6.912c-0.357-1.986-1.456-3.712-3-4.888C56.597,24.977,57,23.195,57,21.395z M41,3   c5.514,0,10,4.486,10,10v12h-2.528c-0.759,0-1.499,0.104-2.205,0.298l-0.825-1.649C47.586,22.212,49,19.768,49,17v-5.868   c0-1.048-0.558-2.034-1.456-2.572l-4.029-2.417l-1.029,1.715l4.029,2.417c0.3,0.18,0.485,0.508,0.485,0.857V17c0,3.309-2.691,6-6,6   s-6-2.691-6-6v-6c0-0.313,0.149-0.612,0.399-0.8L38,8.25l3.4,2.55L42.6,9.2L38,5.75l-3.801,2.851C33.448,9.165,33,10.062,33,11v6   c0,2.828,1.479,5.312,3.701,6.735l-0.282,0.847c-0.114,0.34-0.402,0.595-0.753,0.665l-0.677,0.135   c-0.056-1.868-0.999-3.59-2.561-4.631l-0.544-0.363c-0.19-0.723-0.498-1.391-0.885-2.003V13C31,7.486,35.486,3,41,3z M41,41h-1   c-0.552,0-1-0.449-1-1s0.448-1,1-1h1V41z M41.421,29h-2.067c-0.411,0-0.776-0.247-0.929-0.628l-0.814-2.037   c0.307-0.317,0.561-0.688,0.705-1.12l0.204-0.613C39.302,24.857,40.134,25,41,25c0.93,0,1.82-0.168,2.651-0.461l0.764,1.528   C43.197,26.756,42.165,27.758,41.421,29z M31,31h1c0.552,0,1,0.449,1,1s-0.448,1-1,1h-1V31z M14,33c-0.552,0-1-0.449-1-1   s0.448-1,1-1h1v2H14z M15,28.354V29h-0.465l-1.047-1.57C13.169,26.951,13,26.393,13,25.817c0-1.254,0.799-2.363,1.988-2.759   L16,22.721V22c0-1.654,1.346-3,3-3h1.303l1.685-1.124C22.848,17.303,23.85,17,24.901,17c2.479,0,4.632,1.765,5.118,4.196   l0.081,0.406l1.219,0.813C32.372,23.117,33,24.29,33,25.555c0,0.747-0.219,1.471-0.634,2.093L31.465,29H31v-0.19   c0-1.547-1.161-2.831-2.701-2.985l-5.214-0.521C21.896,25.185,21,24.194,21,23h-2c0,0.565,0.107,1.105,0.305,1.601l-2.42,0.968   C15.74,26.027,15,27.121,15,28.354z M17,33v-4.646c0-0.411,0.247-0.776,0.628-0.928l2.873-1.149   c0.649,0.557,1.471,0.925,2.385,1.017l5.214,0.521c0.514,0.051,0.9,0.479,0.9,0.995V33c0,3.309-2.691,6-6,6S17,36.309,17,33z    M23,41c0.866,0,1.698-0.143,2.48-0.398l0.126,0.379L23,43.586l-2.608-2.607c0.004-0.011,0.009-0.02,0.013-0.03l0.115-0.346   C21.302,40.858,22.134,41,23,41z M19.622,43.036l2.408,2.408l-1.445,0.964L19.622,43.036z M23.97,45.445l2.408-2.408l-0.963,3.372   L23.97,45.445z M43.618,51.147C40.9,51.449,38.556,52.854,37,54.883v-2.797c0-5.234-3.568-9.682-8.678-10.817   c-0.341-0.076-0.621-0.329-0.731-0.66L27.3,39.735c1.678-1.075,2.925-2.757,3.437-4.735H32c1.654,0,3-1.346,3-3   c0-1.079-0.577-2.018-1.434-2.547l0.464-0.696c0.265-0.397,0.464-0.826,0.622-1.268l1.173-0.235l0.743,1.859   c0.402,1.006,1.295,1.698,2.342,1.853c-0.579,0.812-0.91,1.801-0.91,2.85c0,0.972,0.285,1.914,0.824,2.722l0.386,0.58   C37.941,37.468,37,38.621,37,40c0,1.654,1.346,3,3,3h1c0,2.828,1.479,5.312,3.701,6.735l-0.245,0.735   C44.333,50.839,44.004,51.104,43.618,51.147z M51.646,51.102c0.067,0.203,0.162,0.39,0.268,0.57l-0.207,0.207   C50.994,52.591,50.008,53,49,53s-1.994-0.409-2.707-1.121l-0.207-0.208c0.106-0.179,0.2-0.367,0.267-0.569l0.167-0.501   C47.301,50.857,48.134,51,49,51c0.866,0,1.698-0.143,2.48-0.398L51.646,51.102z M55,43c0,3.309-2.691,6-6,6s-6-2.691-6-6v-6   c0-0.313,0.149-0.612,0.399-0.8L46,34.25l3.4,2.55l1.199-1.6L46,31.75l-3.801,2.851c-0.566,0.425-0.959,1.039-1.119,1.718   l-0.592-0.889C40.169,34.951,40,34.393,40,33.817c0-1.254,0.799-2.363,1.988-2.759l0.721-0.24l0.186-0.371   c1.063-2.126,3.2-3.447,5.577-3.447h2.62C54.35,27,57,29.65,57,32.908c0,0.878-0.193,1.734-0.563,2.518   c-0.238-0.341-0.528-0.647-0.894-0.866l-4.029-2.417l-1.029,1.715l4.029,2.417c0.3,0.18,0.485,0.508,0.485,0.857V43z M59,40   c0,0.551-0.448,1-1,1h-1v-2h1C58.552,39,59,39.449,59,40z" />
      </g>
    </svg>
  );
};

// Timothy Miller
// Creative Commons (Attribution-Share Alike 3.0 Unported)
export const TimerIcon = ({ size = 16, fill }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size}>
      <g fill={fill}>
        <path
          d="M16,4C9.373,4,4,9.373,4,16c0,6.627,5.373,12,12,12s12-5.373,12-12C28,9.373,22.627,4,16,4z M16,26
        c-5.514,0-10-4.486-10-10S10.486,6,16,6s10,4.486,10,10S21.514,26,16,26z"
        />

        <path
          d="M16,8c-0.552,0-1,0.448-1,1v6.382l-3.447,2.684c-0.44,0.342-0.519,0.975-0.177,1.414
        C11.635,19.807,11.94,20,12.236,20c0.217,0,0.435-0.07,0.619-0.214L16.618,17h0.001c0.213-0.166,0.382-0.431,0.382-0.764V9
        C17,8.448,16.552,8,16,8z"
        />

        <path d="M16,0c-1.657,0-3,1.343-3,3v1h6V3C19,1.343,17.657,0,16,0z" />
      </g>
    </svg>
  );
};

export const TrophyIcon = ({ size = 16, fill }: IIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 107.000000 104.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,104.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
        <path
          d="M460 963 c-144 -16 -245 -34 -258 -47 -10 -9 -16 -39 -17 -83 -3 -63
 -4 -68 -24 -65 -38 6 -91 -18 -106 -48 -44 -85 15 -179 150 -241 42 -19 66
 -37 79 -61 50 -87 89 -136 136 -172 l51 -39 -38 -21 c-32 -19 -38 -27 -38 -56
 0 -42 16 -48 135 -48 119 0 135 6 135 48 0 29 -6 37 -39 56 l-38 22 51 38 c48
 36 87 85 137 172 13 24 37 42 79 61 135 62 194 156 150 241 -15 29 -74 55
 -111 48 -13 -2 -17 9 -19 66 -2 43 -9 74 -18 83 -13 14 -53 21 -242 43 -80 10
 -90 10 -155 3z m-254 -338 c12 -49 20 -92 18 -94 -9 -10 -88 36 -110 64 -26
 35 -32 93 -12 113 7 7 28 12 47 10 l34 -3 23 -90z m752 83 c20 -20 14 -78 -12
 -113 -23 -29 -100 -74 -111 -63 -3 2 2 27 10 54 8 27 15 57 15 66 0 9 4 28 10
 42 8 21 16 26 43 26 18 0 38 -5 45 -12z"
        />
      </g>
    </svg>
  );
};

//
export const MagnifierIcon = ({ size = 16, fill }: IIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g data-name="Layer 2" id="Layer_2">
        <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
      </g>
    </svg>
  );
};

export const GoBackIcon = ({ size = 16, fill }: IIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 76.000000 77.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,77.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
        <path
          d="M420 638 c-40 -35 -112 -101 -161 -147 -81 -76 -89 -88 -89 -121 0
-33 9 -45 88 -121 135 -130 233 -210 251 -207 9 2 17 13 19 24 2 16 -20 41
-94 104 -53 46 -124 109 -158 142 l-61 58 61 58 c34 33 105 96 158 142 74 63
96 88 94 104 -5 38 -35 28 -108 -36z"
        />
      </g>
    </svg>
  );
};

export const MaleIcon = ({ size = 16, fill = '#7bb3ff' }: IIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29,24.79167v5.13261l11.73385,3.34534A9.58333,9.58333,0,0,1,47,42.26052V47"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
      />
      <line x1="9" x2="9" y1="44" y2="48" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="2px" />
      <path
        d="M16.03369,30.5C16.37323,33.57916,19.80682,36,24,36s7.62677-2.42084,7.96631-5.5"
        fill="none"
        stroke={fill}
        strokeMiterlimit="10"
        strokeWidth="2px"
      />
      <path
        d="M24,26h0a9,9,0,0,0,9-9V10a9,9,0,0,0-9-9h0a9,9,0,0,0-9,9v7a8.98083,8.98083,0,0,0,4.01213,7.50064L19,29.92428,7.30834,33.20606A9.58333,9.58333,0,0,0,1,42.21242V47"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
      />
      <line x1="39" x2="39" y1="44" y2="48" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="2px" />
      <path
        d="M32.05328,10h-1.568a9.05117,9.05117,0,0,1-6.4621-2.58333V10H17.99314"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2px"
      />
    </svg>
  );
};
export const FemaleIcon = ({ size = 16, fill = '#eb8291' }: IIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.01091,27.75453a3.77649,3.77649,0,0,0,2.16993,0l.0002-.00006a9.56156,9.56156,0,0,0,4.32813-2.72686h0a9.56154,9.56154,0,0,0,2.33214-4.72107l.08137-.44749a9.56149,9.56149,0,0,0,.15424-1.7105V18l-.02365-4h-1.568a9.05117,9.05117,0,0,1-6.4621-2.58333V14H15.99314L16,18v.0589a9.56146,9.56146,0,0,0,.15424,1.7105l.08137.44749a10.90567,10.90567,0,0,0,2.34772,5.11644l.34732.3734v6.024L7.492,35.69051a5.07457,5.07457,0,0,0-3.50449,4.26741L3,47"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
      />
      <line x1="10" x2="10" y1="48" y2="43.65385" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="2px" />
      <path
        d="M29.12,25.66714V31.4517l11.47652,3.50777A5.103,5.103,0,0,1,44.17574,39.268l.94174,7.699"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
      />
      <line x1="38" x2="38" y1="48" y2="44" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="2px" />
      <path
        d="M36.20128,33.28047a13.304,13.304,0,0,1-24.2753.51629"
        fill="none"
        stroke={fill}
        strokeMiterlimit="10"
        strokeWidth="2px"
      />
      <path
        d="M29.35823,29H36v-.5a75.37358,75.37358,0,0,1-1.14237-13.0795L34.86264,12A10.94158,10.94158,0,0,0,23.93132,1h0A10.94158,10.94158,0,0,0,13,12l.005,3.42051A75.37358,75.37358,0,0,1,11.86262,28.5V29h6.64178"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
      />
    </svg>
  );
};

export const AllFriendsIcon = ({ size = 16, fill = '#353535' }: IIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M17.94705,37l9.4942-3.0056V29.1803l-.7104-.8864a9.49328,9.49328,0,0,1-2.0435-4.4535l-.0708-.3896a8.31482,8.31482,0,0,1-.1343-1.4889v-.0512l-.006-3.4818"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M32.47365,30.4014h.0002a8.32309,8.32309,0,0,0,3.7673-2.3736h.0001a8.32288,8.32288,0,0,0,2.0299-4.1094l.0709-.3895a8.32558,8.32558,0,0,0,.1342-1.4889v-.1293l-.0206-3.4818h-4.3282a14.6315,14.6315,0,0,1-9.6862-3.6653h0"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="35.441 28.764 35.441 33.715 45.071 36.779"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M43.37255,36.09c-.7548-3.2711-1.1359-12.6309-1.1359-15.988l.005-3.401A10.87928,10.87928,0,0,0,31.37255,5.7636h0A10.87934,10.87934,0,0,0,20.50345,16.701l.005,3.401c0,3.3571-.3811,12.7169-1.1359,15.988"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <path
        d="M21.67834,36a12.96833,12.96833,0,0,0,19.64332,0"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <g>
        <path
          d="M16.52551,28.82129a8,8,0,0,1-8-8v-5.9726A8.162,8.162,0,0,1,15.339,6.68457a8.01544,8.01544,0,0,1,5.07988.92419"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="1.026 36.99 12.526 32.21 12.526 28.099"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8.68236,14.59912a19.8638,19.8638,0,0,0,8.36192-1.67238,10.75358,10.75358,0,0,1,1.074-.44566"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export const FatherIcon = ({ size = 16, fill }: IIconProps) => {
  return (
    <svg width={size} height={size} fill={fill} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g id="outline">
        <path d="M280,184h24a8,8,0,0,0,0-16H280a8,8,0,0,0,0,16Z" />
        <circle cx="290" cy="199.859" r="10" />
        <path d="M232,184a8,8,0,0,0,0-16H208a8,8,0,0,0,0,16Z" />
        <circle cx="222" cy="199.859" r="10" />
        <path d="M32,496H480a8,8,0,0,0,7.926-9.091l-3.689-26.8a67.968,67.968,0,0,0-36.954-51.551L332.568,351.2l-23.181-21.113A7.973,7.973,0,0,0,304,328.008V317.66a78.852,78.852,0,0,0,25.255-33.4,205.517,205.517,0,0,0,12.534-46.4h5.267a28.784,28.784,0,0,0,25.888-16A29.092,29.092,0,0,0,376,208.915V194.8a28.978,28.978,0,0,0-27.229-28.889c1.008-4.024,2.088-8.338,3.166-12.639A95.34,95.34,0,0,0,344.7,87.5l-.3-.606a41.187,41.187,0,0,0-37.055-22.9h-.12a89.32,89.32,0,0,0-61.138-24c-8.853,0-18.506-.006-27.734-.012h-.056a90.543,90.543,0,0,0-73.321,37.582l-.569.79a50.331,50.331,0,0,0-4.15,52.113l.778,1.554A50.933,50.933,0,0,0,168,156.732v9.127h-3.056A28.977,28.977,0,0,0,136,194.8v14.111a29.092,29.092,0,0,0,3.056,12.944,28.784,28.784,0,0,0,25.888,16h5.267a205.525,205.525,0,0,0,12.534,46.406A78.849,78.849,0,0,0,208,317.66v10.348a7.973,7.973,0,0,0-5.387,2.078L179.433,351.2,64.717,408.557a67.971,67.971,0,0,0-36.955,51.551l-3.688,26.8A8,8,0,0,0,32,496ZM344,207.7V184.984l.782-3.125h2.274A12.959,12.959,0,0,1,360,194.8v14.111a13.017,13.017,0,0,1-1.366,5.788,12.875,12.875,0,0,1-11.578,7.156h-3.543Q343.993,214.811,344,207.7ZM440,422.8l.127.063a51.977,51.977,0,0,1,28.26,39.423L470.824,480H440Zm-105.421-52.71,8.955,4.477L333,383.128ZM319.562,361l-5.8,47.955-44.817-35.112,34.683-27.356ZM288.038,338.4,256,363.671l-32-25.24V327.145a79.616,79.616,0,0,0,64,0v10.5C288,337.9,288.015,338.152,288.038,338.4ZM256,384.022l13.725,10.753-13.454,10.763-12.992-11.549Zm-5.315,37.957a8,8,0,0,0,10.313.268l21.667-17.334,11.976,9.383L256,445.692l-38.641-31.4,13.119-10.278Zm-85.741-200.12a12.875,12.875,0,0,1-11.578-7.156A13.017,13.017,0,0,1,152,208.915V194.8a12.959,12.959,0,0,1,12.944-12.945H168V207.7q0,7.111.487,14.162Zm-9.613-97.008-.778-1.554a34.365,34.365,0,0,1,2.822-35.58l.586-.815a74.494,74.494,0,0,1,60.327-30.92h.047c9.23.006,18.885.01,27.739.012a73.468,73.468,0,0,1,52.269,21.663A8,8,0,0,0,304,80h.021l3.239-.009h.075a25.285,25.285,0,0,1,22.748,14.065l.3.606a79.334,79.334,0,0,1,6.03,54.726c-.662,2.64-1.325,5.288-1.972,7.87a82.471,82.471,0,0,0-26.007-27.914,8,8,0,0,0-7.416-.769l-.19.076A215.742,215.742,0,0,1,221.1,144.146l-34.177.118h-.139A34.995,34.995,0,0,1,155.331,124.851ZM197.6,278.322A189.337,189.337,0,0,1,184,207.7V160.182c.923.049,1.85.082,2.783.082h.2l34.175-.118a231.583,231.583,0,0,0,81.728-15.125,66.452,66.452,0,0,1,24.347,36.9l.766,3.063V207.7a189.328,189.328,0,0,1-13.6,70.624,62.9,62.9,0,0,1-116.8,0Zm10.771,68.16,34.683,27.356L198.238,408.95,192.438,361Zm-30.951,23.611L179,383.128l-10.532-8.557Zm-24.662,12.331,29,23.566,2.295,18.971a8,8,0,0,0,12.876,5.337l7.507-5.882,46.514,37.793a8,8,0,0,0,10.09,0l46.514-37.793,7.507,5.882a8,8,0,0,0,12.876-5.337l2.3-18.97,29-23.566,64.851,32.425A8.061,8.061,0,0,0,424,416v64H88V416a8.061,8.061,0,0,0-.092-1.15ZM43.612,462.29a51.981,51.981,0,0,1,28.261-39.423L72,422.8V480H41.176Z" />
        <path d="M296,280a8,8,0,0,0,8-8,40.045,40.045,0,0,0-40-40h-8v-5.859a8,8,0,1,0-16,0v6.664A40.068,40.068,0,0,0,208,272a8,8,0,0,0,8,8Zm-48-32h16a24.042,24.042,0,0,1,22.629,16H225.371A24.042,24.042,0,0,1,248,248Z" />
      </g>
    </svg>
  );
};

export const MotherIcon = ({ size = 16, fill }: IIconProps) => {
  return (
    <svg width={size} height={size} fill={fill} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g id="outline">
        <path d="M444.2,439.289a67.854,67.854,0,0,0-34.144-35.364l-91.677-42.387c-.1-.046-10.617-7.09-11.815-12.885a148.161,148.161,0,0,1-3.049-28.677c.163.009.323.024.488.024h18.131a60.54,60.54,0,0,0,59.828-69.8l-6.086-39.311a7.961,7.961,0,0,0-.377-1.47v-4.473a28.778,28.778,0,0,0-2.288-11.277l-7.754-50.088a108.2,108.2,0,0,0-215.174,2.456l-7.569,39.819a28.818,28.818,0,0,0-7.215,19.09v14.112a28.921,28.921,0,0,0,.285,3.953,8.05,8.05,0,0,0-.388,1.348l-3.938,20.714a60.878,60.878,0,0,0,5.326,38.38l1.542,3.084A60.211,60.211,0,0,0,192.472,320h15.007a148.2,148.2,0,0,1-3.128,29.04c-1.18,5.631-10.45,12.385-10.522,12.416s-91.882,42.469-91.882,42.469A67.854,67.854,0,0,0,67.8,439.289L48.625,484.9A8,8,0,0,0,56,496H456a8,8,0,0,0,7.375-11.1Zm-139.864-67a56.014,56.014,0,0,1-96.84-.285,32.945,32.945,0,0,0,12.518-19.683,164.187,164.187,0,0,0,3.2-24.106,73.022,73.022,0,0,0,64.608.5,163.912,163.912,0,0,0,3.077,23.184A32.7,32.7,0,0,0,304.333,372.29Zm61.813-119.644A44.538,44.538,0,0,1,322.131,304h-6.066a73.755,73.755,0,0,0,4.816-8.325A219.246,219.246,0,0,0,337.851,248h8.7a28.817,28.817,0,0,0,17.916-6.2Zm-6.65-47.7v14.112a13.014,13.014,0,0,1-1.367,5.788A12.874,12.874,0,0,1,346.552,232h-5.636a217.9,217.9,0,0,0,2.58-33.219V192h3.056A12.959,12.959,0,0,1,359.5,204.944Zm-193.426-56.3c.049-.255.085-.513.109-.772a92.195,92.195,0,0,1,183.4-2.3c.012.1.025.2.04.3l4.834,31.226a28.871,28.871,0,0,0-7.9-1.1h-3.766a23.5,23.5,0,0,0-19.818-17.642,72.372,72.372,0,0,1-59.308-48.676l-.074-.222a8,8,0,0,0-15.172,0l-.078.231a72.366,72.366,0,0,1-59.3,48.667A23.5,23.5,0,0,0,169.215,176H164.44a28.924,28.924,0,0,0-3.613.234Zm15.044,123.271A8.8,8.8,0,0,1,180,272c-6.5,0-12-7.327-12-16a18.108,18.108,0,0,1,5.057-13A220.815,220.815,0,0,0,181.114,271.918ZM151.5,204.944A12.959,12.959,0,0,1,164.44,192H168.5v6.781a217.428,217.428,0,0,0,1.741,27.23,27.26,27.26,0,0,0-8.507,5.708,12.864,12.864,0,0,1-8.876-6.875,13.017,13.017,0,0,1-1.366-5.788ZM192.472,304a44.3,44.3,0,0,1-39.838-24.621l-1.542-3.084a44.774,44.774,0,0,1-3.918-28.235l.964-5.073a28.649,28.649,0,0,0,5.307,2.851A36.4,36.4,0,0,0,152,256c0,17.645,12.561,32,28,32a24.93,24.93,0,0,0,7.084-1.034c1.288,2.93,2.619,5.841,4.035,8.709h0A73.624,73.624,0,0,0,195.936,304Zm13-15.408h0a203.959,203.959,0,0,1-20.963-89.81V181.635a7.474,7.474,0,0,1,6.528-7.4A88.534,88.534,0,0,0,256,131.29a88.531,88.531,0,0,0,64.967,42.943,7.474,7.474,0,0,1,6.528,7.4v17.146a203.967,203.967,0,0,1-20.963,89.811,56.356,56.356,0,0,1-101.066,0Zm-12.221,90.747a72.046,72.046,0,0,0,125.507,0l14.561,6.73a88.07,88.07,0,0,1-154.631,0ZM416,480V456a8,8,0,0,0-16,0v24H112V456a8,8,0,0,0-16,0v24H68.042l14.511-34.51a51.88,51.88,0,0,1,26.109-27.042l55.5-25.661a104.007,104.007,0,0,0,183.7.006l55.482,25.655a51.88,51.88,0,0,1,26.109,27.042L443.958,480Z" />
        <path d="M279.5,192h24a8,8,0,0,0,0-16h-24a8,8,0,0,0,0,16Z" />
        <circle cx="289.496" cy="210" r="11" />
        <path d="M239.5,184a8,8,0,0,0-8-8H208a8,8,0,0,0,0,16h23.5A8,8,0,0,0,239.5,184Z" />
        <circle cx="221.496" cy="210" r="11" />
        <path d="M232.608,270.312a8,8,0,0,0,4.33,10.453,49.506,49.506,0,0,0,38.124,0,8,8,0,0,0-6.124-14.784,33.577,33.577,0,0,1-25.876,0A8,8,0,0,0,232.608,270.312Z" />
        <path d="M248,256h16a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v16A8,8,0,0,0,248,256Z" />
      </g>
    </svg>
  );
};
export const ChildrenIcon: React.FC<IIconProps> = ({ size = 16, fill = '#eb8291' }) => {
  return (
    <svg width={size} height={size} fill={fill} version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M44.23,26.09c1.57,0.33,2.76,1.73,2.76,3.41c0,1.89-1.51,3.43-3.38,3.49C42.29,38.17,37.59,42,31.99,42s-10.3-3.83-11.62-9.01c-1.87-0.06-3.38-1.6-3.38-3.49c0-1.68,1.2-3.1,2.78-3.42"
          style={{
            fill: 'none',
            stroke: fill,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M28.186,35.149c0.914,1.193,2.341,1.88,3.843,1.85c1.503-0.029,2.902-0.771,3.769-1.999"
          style={{
            fill: 'none',
            stroke: fill,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
        />
        <circle cx="37.99" cy="29" r="2" style={{ fill }} />
        <circle cx="25.99" cy="29" r="2" style={{ fill }} />
        <path
          d="M39.118,39.651C45.067,41.625,50.324,45.826,51.99,53"
          style={{
            fill: 'none',
            stroke: fill,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M24.882,39.651C18.933,41.625,13.676,45.826,12.01,53"
          style={{
            fill: 'none',
            stroke: fill,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M41.99,40.85V45c0,2.209-1.791,4-4,4h-12c-2.209,0-4-1.791-4-4v-4.15"
          style={{
            fill: 'none',
            stroke: fill,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M19.77,26.08l-0.02-0.06C17.2,13.88,25.99,11,31.99,11s14.79,2.88,12.24,15.02v0.07"
          style={{
            fill: 'none',
            stroke: fill,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M19.77,26.08c0.926-3.387,3.165-6.349,6.22-8.08c3.375,5.292,13,2,13,2c0.208,1.625,2.5,5.313,5.24,6.09"
          style={{
            fill: 'none',
            stroke: fill,
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
        />
      </g>
    </svg>
  );
};

export const TooltipArrowIcon: React.FC<IIconProps> = ({ size = 16, fill = '#eb8291' }) => {
  return (
    <svg width={size} height={size} fill={fill} version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M82.2,63.2c-0.6-0.7-3.7-0.7-3.4-0.4c2.3,3.2,4.4,6.5,6.3,10c1.9,3.5,4.1,7.5,4.6,11.5c0.1,0.4,0.1,0.7,0.1,1.1  c-15.5-9.6-29.4-21.2-42.1-34.3c-6.8-7-13.3-14.2-19.5-21.6C22.1,22.1,16.3,14.4,10,7.2C9.3,6.3,4.5,6,5,6.9  c4,6.3,8.8,12.2,13.5,18.1c4.5,5.7,9.1,11.4,13.9,16.9c9.8,11.3,20.5,22,32.2,31.3c6.7,5.4,13.8,10.2,21.3,14.4  c0.9,0.5,2,0.9,3.2,1.1c-1,1.7-2.9,2.6-5.5,2.7c-4.6,0.2-9.2-0.3-13.7-1.3c-0.4-0.1-2.6-0.5-2.8,0.2c-0.2,0.7,1.3,1.1,1.8,1.2  c5.2,1.3,10.5,2.1,15.9,2c3.5,0,8.6-0.1,9.9-4.2c1.3-4.1-1.8-9.1-3.6-12.5C88.6,72.1,85.6,67.5,82.2,63.2z" />
    </svg>
  );
};
