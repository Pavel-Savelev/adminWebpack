export type Event = {
  start: string;
  end: string;
  status: "Online" | "Offline";
};

export const statsData = {
    availability: 98.7,        // %
    offlineTime: 8100,         // секунды (2 часа 15 минут)
    onlineTime: 352500,        // секунды (примерно 97 часов 45 минут)
    totalTime: 360000          // секунды (100 часов)
};


export const mockData: Event[] = [
  // 2025-06-20
  { start: "2025-06-20T00:00:00", end: "2025-06-20T08:00:00", status: "Offline" },
  { start: "2025-06-20T08:00:00", end: "2025-06-20T10:30:00", status: "Online" },
  { start: "2025-06-20T10:30:00", end: "2025-06-20T11:15:00", status: "Offline" },
  { start: "2025-06-20T11:15:00", end: "2025-06-21T00:00:00", status: "Offline" },

  // 2025-06-21
  { start: "2025-06-21T00:00:00", end: "2025-06-21T09:00:00", status: "Offline" },
  { start: "2025-06-21T09:00:00", end: "2025-06-21T12:45:00", status: "Online" },
  { start: "2025-06-21T12:45:00", end: "2025-06-21T13:10:00", status: "Offline" },
  { start: "2025-06-21T13:10:00", end: "2025-06-22T00:00:00", status: "Offline" },

  // 2025-06-22
  { start: "2025-06-22T00:00:00", end: "2025-06-22T07:30:00", status: "Offline" },
  { start: "2025-06-22T07:30:00", end: "2025-06-22T11:00:00", status: "Online" },
  { start: "2025-06-22T11:00:00", end: "2025-06-23T00:00:00", status: "Offline" },

  // 2025-06-23
  { start: "2025-06-23T00:00:00", end: "2025-06-23T06:00:00", status: "Offline" },
  { start: "2025-06-23T06:00:00", end: "2025-06-23T09:45:00", status: "Online" },
  { start: "2025-06-23T09:45:00", end: "2025-06-23T10:00:00", status: "Offline" },
  { start: "2025-06-23T10:00:00", end: "2025-06-24T00:00:00", status: "Offline" },

  // 2025-06-24
  { start: "2025-06-24T00:00:00", end: "2025-06-24T08:15:00", status: "Offline" },
  { start: "2025-06-24T08:15:00", end: "2025-06-24T11:30:00", status: "Online" },
  { start: "2025-06-24T11:30:00", end: "2025-06-24T12:00:00", status: "Offline" },
  { start: "2025-06-24T12:00:00", end: "2025-06-25T00:00:00", status: "Offline" },

  // 2025-06-25
  { start: "2025-06-25T00:00:00", end: "2025-06-25T07:45:00", status: "Offline" },
  { start: "2025-06-25T07:45:00", end: "2025-06-25T10:15:00", status: "Online" },
  { start: "2025-06-25T10:15:00", end: "2025-06-26T00:00:00", status: "Offline" },

  // 2025-06-26
  { start: "2025-06-26T00:00:00", end: "2025-06-26T09:30:00", status: "Offline" },
  { start: "2025-06-26T09:30:00", end: "2025-06-26T12:00:00", status: "Online" },
  { start: "2025-06-26T12:00:00", end: "2025-06-26T12:20:00", status: "Offline" },
  { start: "2025-06-26T12:20:00", end: "2025-06-27T00:00:00", status: "Offline" },

  // 2025-06-27
  { start: "2025-06-27T00:00:00", end: "2025-06-27T08:00:00", status: "Offline" },
  { start: "2025-06-27T08:00:00", end: "2025-06-27T11:45:00", status: "Online" },
  { start: "2025-06-27T11:45:00", end: "2025-06-27T12:00:00", status: "Offline" },
  { start: "2025-06-27T12:00:00", end: "2025-06-28T00:00:00", status: "Offline" },

  // 2025-06-28
  { start: "2025-06-28T00:00:00", end: "2025-06-28T07:30:00", status: "Offline" },
  { start: "2025-06-28T07:30:00", end: "2025-06-28T10:00:00", status: "Online" },
  { start: "2025-06-28T10:00:00", end: "2025-06-28T10:30:00", status: "Offline" },
  { start: "2025-06-28T10:30:00", end: "2025-06-29T00:00:00", status: "Offline" },

  // 2025-06-29
  { start: "2025-06-29T00:00:00", end: "2025-06-29T09:00:00", status: "Offline" },
  { start: "2025-06-29T09:00:00", end: "2025-06-29T12:15:00", status: "Online" },
  { start: "2025-06-29T12:15:00", end: "2025-06-29T12:45:00", status: "Offline" },
  { start: "2025-06-29T12:45:00", end: "2025-06-30T00:00:00", status: "Offline" },

  // 2025-06-30
  { start: "2025-06-30T00:00:00", end: "2025-06-30T08:00:00", status: "Offline" },
  { start: "2025-06-30T08:00:00", end: "2025-06-30T11:30:00", status: "Online" },
  { start: "2025-06-30T11:30:00", end: "2025-06-30T12:00:00", status: "Offline" },
  { start: "2025-06-30T12:00:00", end: "2025-07-01T00:00:00", status: "Offline" },

  // 2025-07-01
  { start: "2025-07-01T00:00:00", end: "2025-07-01T07:45:00", status: "Offline" },
  { start: "2025-07-01T07:45:00", end: "2025-07-01T10:15:00", status: "Online" },
  { start: "2025-07-01T10:15:00", end: "2025-07-01T10:45:00", status: "Offline" },
  { start: "2025-07-01T10:45:00", end: "2025-07-02T00:00:00", status: "Offline" },

  // 2025-07-02
  { start: "2025-07-02T00:00:00", end: "2025-07-02T09:30:00", status: "Offline" },
  { start: "2025-07-02T09:30:00", end: "2025-07-02T12:00:00", status: "Online" },
  { start: "2025-07-02T12:00:00", end: "2025-07-02T12:20:00", status: "Offline" },
  { start: "2025-07-02T12:20:00", end: "2025-07-03T00:00:00", status: "Offline" },

  // 2025-07-03
  { start: "2025-07-03T00:00:00", end: "2025-07-03T08:00:00", status: "Offline" },
  { start: "2025-07-03T08:00:00", end: "2025-07-03T11:45:00", status: "Online" },
  { start: "2025-07-03T11:45:00", end: "2025-07-03T12:15:00", status: "Offline" },
  { start: "2025-07-03T12:15:00", end: "2025-07-04T00:00:00", status: "Offline" },

  // 2025-07-04
  { start: "2025-07-04T00:00:00", end: "2025-07-04T07:30:00", status: "Offline" },
  { start: "2025-07-04T07:30:00", end: "2025-07-04T10:00:00", status: "Online" },
  { start: "2025-07-04T10:00:00", end: "2025-07-04T10:30:00", status: "Offline" },
  { start: "2025-07-04T10:30:00", end: "2025-07-05T00:00:00", status: "Offline" },

  // 2025-07-05
  { start: "2025-07-05T00:00:00", end: "2025-07-05T09:00:00", status: "Offline" },
  { start: "2025-07-05T09:00:00", end: "2025-07-05T12:15:00", status: "Online" },
  { start: "2025-07-05T12:15:00", end: "2025-07-05T12:45:00", status: "Offline" },
  { start: "2025-07-05T12:45:00", end: "2025-07-06T00:00:00", status: "Offline" },

  // 2025-07-06
  { start: "2025-07-06T00:00:00", end: "2025-07-06T08:00:00", status: "Offline" },
  { start: "2025-07-06T08:00:00", end: "2025-07-06T11:30:00", status: "Online" },
  { start: "2025-07-06T11:30:00", end: "2025-07-06T12:00:00", status: "Offline" },
  { start: "2025-07-06T12:00:00", end: "2025-07-07T00:00:00", status: "Offline" },

  // 2025-07-07
  { start: "2025-07-07T00:00:00", end: "2025-07-07T07:45:00", status: "Offline" },
  { start: "2025-07-07T07:45:00", end: "2025-07-07T10:15:00", status: "Online" },
  { start: "2025-07-07T10:15:00", end: "2025-07-07T10:45:00", status: "Offline" },
  { start: "2025-07-07T10:45:00", end: "2025-07-08T00:00:00", status: "Offline" },
];
