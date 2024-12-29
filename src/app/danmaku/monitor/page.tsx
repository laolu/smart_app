import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DanmakuItem {
  id: string
  type: "enter" | "gift" | "danmaku" | "follow" | "join_fan_club"
  username: string
  content: string
  timestamp: string
}

interface Room {
  id: string
  name: string
  platform: string
}

export default function DanmakuMonitorPage() {
  const [selectedRoom, setSelectedRoom] = useState<string>("")
  const [filters, setFilters] = useState({
    enter: true,
    gift: true,
    danmaku: true,
    follow: true,
    joinFanClub: true,
  })
  const [danmakuList, setDanmakuList] = useState<DanmakuItem[]>([])

  // 模拟房间数据
  const rooms: Room[] = [
    { id: "1", name: "主播1", platform: "斗鱼" },
    { id: "2", name: "主播2", platform: "虎牙" },
    { id: "3", name: "主播3", platform: "B站" },
  ]

  const handleFilterChange = (key: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Label>选择房间</Label>
          <Select value={selectedRoom} onValueChange={setSelectedRoom}>
            <SelectTrigger>
              <SelectValue placeholder="选择要监控的房间" />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((room) => (
                <SelectItem key={room.id} value={room.id}>
                  {room.name} ({room.platform})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label>房间ID</Label>
          <div className="flex gap-2">
            <Input placeholder="输入房间ID" />
            <Button>添加房间</Button>
          </div>
        </div>
      </div>

      <Card className="p-4">
        <h3 className="font-medium mb-3">过滤选项</h3>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Checkbox
              id="enter"
              checked={filters.enter}
              onCheckedChange={() => handleFilterChange("enter")}
            />
            <Label htmlFor="enter">进入提醒</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="gift"
              checked={filters.gift}
              onCheckedChange={() => handleFilterChange("gift")}
            />
            <Label htmlFor="gift">礼物</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="danmaku"
              checked={filters.danmaku}
              onCheckedChange={() => handleFilterChange("danmaku")}
            />
            <Label htmlFor="danmaku">弹幕</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="follow"
              checked={filters.follow}
              onCheckedChange={() => handleFilterChange("follow")}
            />
            <Label htmlFor="follow">关注</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="joinFanClub"
              checked={filters.joinFanClub}
              onCheckedChange={() => handleFilterChange("joinFanClub")}
            />
            <Label htmlFor="joinFanClub">加入粉丝团</Label>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-medium mb-3">弹幕列表</h3>
        <div className="space-y-2 max-h-[600px] overflow-y-auto">
          {danmakuList.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              暂无弹幕消息
            </div>
          ) : (
            danmakuList.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg"
              >
                <span className="text-sm text-muted-foreground">
                  {item.timestamp}
                </span>
                <span className="font-medium">{item.username}</span>
                <span>{item.content}</span>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  )
} 