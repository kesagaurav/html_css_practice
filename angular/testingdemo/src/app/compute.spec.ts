import { compute } from "./add/compute";

describe('compute',()=>{
    it('should return 0 ',()=>{
        const result=compute(-1);
        expect(result).toBe(0);
    })
})